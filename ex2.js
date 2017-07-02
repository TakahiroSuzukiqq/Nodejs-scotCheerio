var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = request('cheerio');
var fs = require('fs');
var port = 8080;

//#1setup url that we scrape
var url = "https://www.indeed.com/jobs?l=Los+Angeles&_ga=2.148295732.247631630.1498986780-1138075501.1498986780"


// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));

// //Example 1
// var url = 'http://shockwavelabs.net';
// request(url, function(err, resp, body){
//   if(err){
//       console.log('error' + err);
//   }else{
//       console.log(body);
//   }
// });
// //end

// //Example 1a
// //define file destination
// var destination = fs.createWriteStream('./downloads/google3.html');
// request(url).pipe(destination);
// //

// //Example 1b
// var destination = fs.createWriteStream('./downloads/google2.html');
// request(url)
//  .pipe(destination)
//  .on('finish', function(){
//     console.log('all done');
// });
// //alt to chaining
// destination.on('finish', function() {
//     console.log('all done');
//  })
//  .on('error', function(err) {
//     console.log(err);
//  });

//#1using request method to pass the url, create err function and the body
//set $ variable, this is cheerio.load method. Allow us to grab and pass the element of the page, all the pages to cheerio.
//つまりこれによってweb pageの情報、例えば会社名などを取ってくることができる
request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    var companyName = $('.company');           //standard JQuery syntax tfor grabbing an element, specifically grabbing a class element
    var companyNameText = companyName.text();  //however in order to get the text itself, we have to chain a .text method

    console.log(companyNameText);              //test whether we can get company name text from the web page / terminal : node ex2.js
})

 app.listen(port);
 console.log('server running on'+ port);