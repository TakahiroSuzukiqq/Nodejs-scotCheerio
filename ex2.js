//===========================Scraping company name info.======================================
//#0
var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8080;

//#1setup url that we scrape
var url = "https://www.indeed.com/jobs?l=Los+Angeles&_ga=2.148295732.247631630.1498986780-1138075501.1498986780"

//#1using request method to pass the url, create err function and the body
//set $ variable, this is cheerio.load method. Allow us to grab and pass the element of the page, all the pages to cheerio.
//つまりこれによってweb pageの情報、例えば会社名などを取ってくることができる
request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    // var companyName = $('.company');           //standard JQuery syntax tfor grabbing an element, specifically grabbing a class element
    // var companyNameText = companyName.text();  //however in order to get the text itself, we have to chain a .text method

//#2var companyNameとcompanyNameTextのチェインを使わずにjavascriptのfilter methodを使うこともできる
   $('./company').filter(function() {    //filter out the information whatever we're looking for.
     var companyName = $(this);
     companyNameText = companyName.text();
   })
//#1
    console.log(companyNameText);              //test whether we can get company name text from the web page / terminal : node ex2.js
})
//#0
 app.listen(port);
 console.log('server running on'+ port);

