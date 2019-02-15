var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

const server = app.listen(3000, () => {
    const port = server.address().port;

    console.log(`Express running at port ${port}`);
});