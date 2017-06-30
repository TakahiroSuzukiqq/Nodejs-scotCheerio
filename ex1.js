var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8080;

var url = "http://google.com";
request(url, function(err, resp, body){
  if(err){
      console.log(err);
   }else{
      console.log(body);
   }
  })

app.listen(port);
console.log("server is listening on" + port);