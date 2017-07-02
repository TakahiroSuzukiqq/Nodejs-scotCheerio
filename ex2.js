// //#0
// var express = require('express');
// var path = require('path');
// var app = express();
// var request = require('request');
// var cheerio = require('cheerio');
// var fs = require('fs');
// var port = 8080;

// //#1setup url that we scrape
// var url = "https://www.indeed.com/jobs?l=Los+Angeles&_ga=2.148295732.247631630.1498986780-1138075501.1498986780"

// //#1using request method to pass the url, create err function and the body
// //set $ variable, this is cheerio.load method. Allow us to grab and pass the element of the page, all the pages to cheerio.
// //つまりこれによってweb pageの情報、例えば会社名などを取ってくることができる
// request(url, function(err, resp, body){
//     var $ = cheerio.load(body);
//     // var companyName = $('.company');           //standard JQuery syntax tfor grabbing an element, specifically grabbing a class element
//     // var companyNameText = companyName.text();  //however in order to get the text itself, we have to chain a .text method

// //#2var companyNameとcompanyNameTextのチェインを使わずにjavascriptのfilter methodを使うこともできる
//    $('./company').filter(function() {    //filter out the information whatever we're looking for.
//      var companyName = $(this);
//      companyNameText = companyName.text();
//    })
// //#1
//     console.log(companyNameText);              //test whether we can get company name text from the web page / terminal : node ex2.js
// })
// //#0
//  app.listen(port);
//  console.log('server running on'+ port);


 //#3how to say various elements as an object anad print that entire object to the console
//export th company name, the job title, the location and the summary
var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8080;

var url = "https://www.indeed.com/cmp/Fuze-Lab/jobs/Entry-Junior-PHPJquery-MySQL-Coder-Team-Member-01790db21236725e"

request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    var companyName = $('.company');      
    var companyNameText = companyName.text();

    //look at the web page, we want to get thefont attribute
    //各項目それぞれscrapeしたいattributeを持ってくる
    var jobTitle = $('.jobtitle font');
    var jobTitleText = jobTitle.text();

    var location = $('.location');
    var locationText = location.text();
    
    //上の3つではクラスを取って来たかったのでdotを使っていたが、ここではhashを取ってくる為#を使う、
    //また取ってくるのはjob_summaryの中のpタグ
    var summary = $('#job_summary p');
    var summaryText = summary.text();

    //取ってくるのはすべてobjectなのでobjectとなるvar jobをつくる。これら、JSONで返ってきます
    var job = {
     jobTitle: jobTitleText,        //the name of the key and value pair of hte object
     location: locationText, 
     companyName: companyNameText,
     summary: summaryText 
    }

    console.log(job);
})

 app.listen(port);
 console.log('server running on'+ port);

