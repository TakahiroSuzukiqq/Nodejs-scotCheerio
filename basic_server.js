var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8080;

app.listen(port, function() {
 console.log('server running on'+ port);
});