var request = require('request');

var now = new Date();
const marketPositions = [
    { "date": now.toISOString(), "close": 10, "open": 10 }
];
let counter = 0;

function updateMarket(callback) {
    const diff = Math.floor(Math.random() * 1000) / 100;
    let open;
    let close;

    if (counter % 2 === 0) {
        open = marketPositions[0].open + diff;
        close = marketPositions[0].close + diff;
    } else {
        open = Math.abs(marketPositions[0].open - diff);
        close = Math.abs(marketPositions[0].close - diff);
    }
    request.get(
        process.env.ES_URL + '/_search',

        {
            json: {
                "query": {
                    "range": {
                        "timestamp_ms": {
                            "from": "now-5m",
                            "to": "now-4m"
                        }
                    }
                }
            },
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body.hits.total);
                close = body.hits.total;
                var current = new Date();
                
                marketPositions.unshift({
                    date: current.toISOString(),
                    open,
                    close
                });
                counter++;
                callback();
            }
        }
    );
}

module.exports = {
    marketPositions,
    updateMarket,
};