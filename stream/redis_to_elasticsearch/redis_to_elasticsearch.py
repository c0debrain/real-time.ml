import time
import redis
import requests
import os
import json

cache = redis.Redis(host='redis', port=6379)
ES_INDEX = os.getenv("ES_INDEX")
ES_URI = os.getenv("ES_URI")
ES_MAX_SIZE = int(os.getenv("ES_MAX_SIZE"))

def initalize_es():
    r = requests.put(ES_URI + ES_INDEX)
    
    data = {
        "properties" : {
            "timestamp_ms": {
                "type":   "date",
                "format": "epoch_millis"
            }
        }
    }

    r = requests.put(ES_URI + ES_INDEX + "/_mapping", json=data)
    print("Create index status:",r.json())

    data = {
        "index.mapping.total_fields.limit": 2000
    }
    r = requests.put(ES_URI + ES_INDEX + '/_settings', json=data)
    print("Change config status:",r.json())

def delete_old():
    r = requests.get(ES_URI + ES_INDEX + "/_stats/")
    es_size = r.json()['_all']['total']['store']['size_in_bytes']
    print("Index size:",es_size)
    if es_size < ES_MAX_SIZE:
        return
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
    print("Deleted response:", r.json())
    r = requests.post(ES_URI + ES_INDEX + '/_forcemerge?only_expunge_deletes=true&max_num_segments=1', json=data)
    print("Force merge response:", r.json())

def bulk_add_to_elastic_search(doc_list):
    if len(doc_list) == 0:
        print("No documents to send.")
        return False, {}
    
    es_doc_list = []
    for doc in doc_list:
        es_doc_list.append({"index": {}})
        es_doc_list.append(doc)

    data_to_post = '\n'.join(json.dumps(d) for d in es_doc_list) + "\n"
    headers = {"Content-Type": "application/x-ndjson"}
    r = requests.post(ES_URI + ES_INDEX + "/_bulk?pretty", headers=headers, data=data_to_post)
    return r.json()['errors'], r.json()

initalize_es()
count = 0
while True:
    retries = 5
    try:
        incoming_tweets = []
        redis_list = "mylist"
        num_items = 100
        redis_pipeline = cache.pipeline()
        redis_pipeline.multi()
        redis_pipeline.lrange(redis_list, 0, num_items - 1)
        redis_pipeline.ltrim(redis_list, num_items, -1)
        resp = redis_pipeline.execute()
        for tweet in resp[0]:
            incoming_tweets.append(json.loads(tweet))
        print("Incoming tweets:",len(incoming_tweets))
        errors, response = bulk_add_to_elastic_search(incoming_tweets)
        count += len(incoming_tweets)
        if not errors:
            if count > 60:
                count = 0
                delete_old()
                print("Count:",count)
        else:
            print("Response:",response)
            initalize_es()
    except redis.exceptions.ConnectionError as exc:
        if retries == 0:
            raise exc
        retries -= 1
        time.sleep(0.5)
    time.sleep(1)