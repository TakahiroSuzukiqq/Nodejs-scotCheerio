var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = request('cheerio');
var fs = require('fs');
var port = 8080;

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


//Example 1
var url = 'http://shockwavelabs.net';
request(url, function(err, resp, body){
  if(err){
      console.log('error' + err);
  }else{
      console.log(body);
  }
});
//end


//Example 1a
//define file destination
var destination = fs.createWriteStream('./downloads/google3.html');
request(url).pipe(destination);
//


//Example 1b
var destination = fs.createWriteStream('./downloads/google2.html');
request(url)
 .pipe(destination)
 .on('finish', function(){
    console.log('all done');
});
//alt to chaining
destination.on('finish', function() {
    console.log('all done');
 })
 .on('error', function(err) {
    console.log(err);
 });



 app.listen(port);
 console.log('server running on'+ port);