var request = require('request');

var now = new Date();
const tweets_biden = [
    { "date": now.toISOString(), "num_tweets": 10 }
];

function updateTweets(callback) {
    let tweets_biden;
    request.get(
        process.env.ES_URL + '/_search',
        {
            json: {
                "query": {
                    "bool": {
                        "must": [
                            {
                                "multi_match": {
                                    "query": "joe biden",
                                    "fields": ["text", "extended_tweet.full_text",
                                        "retweeted_status.text",
                                        "retweeted_status.extended_tweet.full_text"]
                                }
                            },
                            {
                                "range": {
                                    "timestamp_ms": {
                                        "gte": "now-1m",
                                        "lte": "now"
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body.hits.total.value);
                    tweets_biden = body.hits.total.value;
                    var current = new Date();

                    tweets_biden.unshift({
                        date: current.toISOString(),
                        tweets_biden
                    });
                    counter++;
                    callback();
                }
            }
        }
    );
}

module.exports = {
    tweets_biden,
    updateTweets,
};