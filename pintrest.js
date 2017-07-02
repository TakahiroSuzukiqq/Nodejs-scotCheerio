var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8080;
var url = "https://au.pinterest.com/pin/517773288400955850/";

request(url, function(err, resp, body){
    var pin = {};                  //setup pin as an object
    var $ = cheerio.load(body);    //use cheerio to load HTML body 

    //3 var for pulling out the info from web page
    var img = $("meta[itemprop = 'image']").get(1);   //image is the second instance so 1 
    var $img = $(img).attr('content');
    var $desc = $("meta[itemprop = 'text']").attr('content');
   
    var pin = {
     img: $img,
     desc: $desc,
     url: url
    }
     console.log("scraped:" ,pin);
})

app.listen(port, function() {
 console.log('server running on'+ port);
});