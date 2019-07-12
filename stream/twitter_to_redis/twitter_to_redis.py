import os
import twitter
import pprint
import requests
import json
import time
import redis

CONSUMER_KEY = os.getenv("CONSUMER_KEY")
CONSUMER_SECRET = os.getenv("CONSUMER_SECRET")
ACCESS_TOKEN_KEY = os.getenv("ACCESS_TOKEN_KEY")
ACCESS_TOKEN_SECRET = os.getenv("ACCESS_TOKEN_SECRET")

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
t = time.perf_counter()

cache = redis.Redis(host='redis', port=6379)

while True:
    try:
        for line in api.GetStreamFilter(track=TRACK, languages=LANGUAGES):
            try:
                cache.rpush("mylist",json.dumps(line))
                count += 1
                if count % 60 == 0:
                    elapsed_time = time.perf_counter() - t
                    t = time.perf_counter()
                    print("Count:",count)
                    print("Elaspsed Time:",elapsed_time)
                    print("Throughput:",60/elapsed_time,"tweets per second")
            except redis.exceptions.ConnectionError as exc:
                pass
    except twitter.error.TwitterError as e:
        print(e)
        print("Waiting 90 seconds before trying to reconnect.")
    time.sleep(90)
