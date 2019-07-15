const app = require('express')();
const http = require('http').Server(app);
const tweets = require('./tweets');
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/v1/tweet_counts_all', (req, res) => {
    res.send(tweets.counts.all);
});

app.get('/api/v1/tweet_counts_biden', (req, res) => {
    res.send(tweets.counts.biden);
});

app.get('/api/v1/tweet_counts_trump', (req, res) => {
    res.send(tweets.counts.trump);
});

app.get('/api/v1/tweet_text_all', (req, res) => {
    res.send(tweets.text.all[0]);
});

setInterval(function () {
    tweets.updateTweets(() =>{
        io.sockets.emit('tweet_counts_all', tweets.counts.all[0]);
        io.sockets.emit('tweet_counts_biden', tweets.counts.biden[0]);
        io.sockets.emit('tweet_counts_trump', tweets.counts.trump[0]);
        io.sockets.emit('tweet_text_all', tweets.text.all[0]);
    });
}, 1000);

io.on('connection', function (socket) {
    console.log('A user has connected.');
});

http.listen(port, () => {
    console.log(`Listening on *:${port}`);
});