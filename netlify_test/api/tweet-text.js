var request = require('request');
var dotenv = require('dotenv').config({ path: '../../../stream.env.list' });
var now = new Date();
var first_tweet = {
    text:"Tweets will appear here.",
    date:now.toISOString()
}; 

const tweets = [
];

function updateTweet(callback) {
    var current_date = new Date();


    request.get(
        process.env.ES_URI + '/_search',

        {
            json: {
                "from" : 0, "size" : 1,
                "sort": [
                    { "timestamp_ms":"desc"}
                ]
            },
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                if (body.hits.hits.length > 0){
                    var current = new Date();
                    var new_tweet = {
                        tweet: body.hits.hits[0],
                        date: current_date.toISOString(),
                    };
                    tweets.unshift(new_tweet);
                    console.log(new_tweet);
                    callback();
                } else {
                    console.log("Empty tweets.");
                }

            } else {
                console.log(error);
            }
        }
    );
}

module.exports = {
    tweets,
    updateTweet,
};