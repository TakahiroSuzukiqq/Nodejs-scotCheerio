//===========================Scraping company name, job title, location, summary info.======================================
//#1how to say various elements as an object anad print that entire object to the console
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
