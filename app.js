var express = require('express');
var app = express();
var routes = require('routes');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public_html')));

app.listen(80, () => console.log('Example app listening on port 80!'));
