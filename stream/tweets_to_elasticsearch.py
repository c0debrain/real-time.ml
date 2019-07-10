import os

import twitter
import pprint
import requests
import json
import time
CONSUMER_KEY = os.getenv("CONSUMER_KEY")
CONSUMER_SECRET = os.getenv("CONSUMER_SECRET")
ACCESS_TOKEN_KEY = os.getenv("ACCESS_TOKEN_KEY")
ACCESS_TOKEN_SECRET = os.getenv("ACCESS_TOKEN_SECRET")

ES_INDEX = os.getenv("ES_INDEX")
ES_URI = os.getenv("ES_URI")
ES_MAX_SIZE = int(os.getenv("ES_MAX_SIZE"))

def initalize_es():
    data = {
        "mappings" : {
            "_doc": {
                "properties" : {
                    "timestamp_ms": {
                        "type":   "date",
                        "format": "epoch_millis"
                    }
                }
            }
        }
    }

    r = requests.put(ES_URI + ES_INDEX, json=data)
    print("Create index status:",r.json())

    data = {
        "index.mapping.total_fields.limit": 2000
    }
    r = requests.put(ES_URI + ES_INDEX + '/_settings', json=data)
    print("Change config status:",r.json())



def add_to_elastic_search(es_index, doc):
    r = requests.post(ES_URI + ES_INDEX + "/_doc/", json=doc)
    return r.status_code == 201, r.json()

def delete_old():
    data = {
        "query": {
            "range": {
                "timestamp_ms": {
                    "lte": "now-5m",
                }
            }
        }
    }
    r = requests.post(ES_URI + ES_INDEX + '/_delete_by_query?conflicts=proceed', json=data)
    print("Deleted:", r.json()['_all']['total'])

TRACK = [
    'election',
    'joe biden',
    'bernie sanders',
    'kamala harris',
    'elizabeth warren',
    'donald trump',
    'ben sasse',
    'john kasich',
    'ted cruz',
    'mitt romney'
]
LANGUAGES = ['en']
api = twitter.Api(consumer_key=CONSUMER_KEY,
                    consumer_secret=CONSUMER_SECRET,
                    access_token_key=ACCESS_TOKEN_KEY,
                    access_token_secret=ACCESS_TOKEN_SECRET)

count = 0
initalize_es()
t = time.perf_counter()
for line in api.GetStreamFilter(track=TRACK, languages=LANGUAGES):
    status, response = add_to_elastic_search("twitter", line)
    if status:
        count += 1
        if count % 60 == 0:
            elapsed_time = time.perf_counter() - t
            t = time.perf_counter()
            r = requests.get(ES_URI + ES_INDEX + "/_stats/")
            es_size = r.json()['_all']['total']['store']['size_in_bytes']
            print(es_size)
            if es_size > ES_MAX_SIZE:
                delete_old()
            print("Count:",count)
            print("Elaspsed Time:",elapsed_time)
            print("Throughput:",60/elapsed_time,"tweets per second")
    else:
        print(response)
        initalize_es()