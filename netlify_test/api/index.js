const express = require('express');
const app = express();
const http = require('http').Server(app);
const market = require('./market');
const tweet_text = require('./tweet-text');
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/dist/'));

app.get('/api/market', (req, res) => {
    res.send(market.marketPositions);
});

app.get('/api/tweet_text', (req, res) => {
    res.send(tweet_text.tweets[0]);
});

setInterval(function () {
    market.updateMarket(() => {
        io.sockets.emit('market', market.marketPositions[0]);
    });
}, 1000);

setInterval(function () {
    tweet_text.updateTweet(() => {
        io.sockets.emit('tweet_text', tweet_text.tweets[0]);
    });
}, 5000);


io.on('connection', function (socket) {
    console.log('a user connected');
});

http.listen(port, () => {
    console.log(`Listening on *:${port}`);
});