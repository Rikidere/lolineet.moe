var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public_html')));

app.listen(80, () => console.log('Example app listening on port 3001!'));
