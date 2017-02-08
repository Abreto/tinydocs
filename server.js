var express = require('express');
var tinydocs = express();

tinydocs.get('/', function(req, res) {
    res.send('Hello Tinydocs.\n');
});

tinydocs.listen(2222, function () {
    console.log('Tinydocs listen on port 2222.');
})
