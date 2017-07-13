0. Preparation  
   creating a project folder and inside the folder creating a file called ex1.js (you can use CLI "touch ex1.js" in your terminal to create the file).  
  
1. Installation 
   ````
   $npm init  
   $npm install --save express request cheerio path handlebars  
   ````  
  
 

2. ex1.js file : Scraping http://google.com page  
   ````  
    var request = require('request');  
    var cheerio = require('cheerio');  
  
    var url = "http://google.com";  
    request(url, function(err, resp, body){  
      if(err){  
          console.log(err);  
      }else{  
          console.log(body);  
      }  
      });  
   ````  
   <a href="https://ibb.co/i1i9fF"><img src="https://preview.ibb.co/djNfnv/Screen_Shot_2017_07_13_at_22_07_38.png" alt="Screen_Shot_2017_07_13_at_22_07_38" border="0"></a>  
  
    
   In addition, we can store the scraped information with below simple code.  
     
       
   ````  
   var fs = require('fs');  
        
   var destination = fs.createWriteStream('downloads/google.html');  
   ````  
   <a href="https://ibb.co/ftPqLF"><img src="https://preview.ibb.co/iUSo7v/Screen_Shot_2017_07_13_at_22_00_06.png" alt="Screen_Shot_2017_07_13_at_22_00_06" border="0"></a>  
        
          
3. ex2a.js file  : Scraping particular information from Indeed and store them  
   Scraping particular information by declaring as following, and display on terminal.  
   ````  
    var path = require('path');
    var request = require('request');
    var cheerio = require('cheerio');
    var fs = require('fs');

    var url = "https://www.indeed.com/cmp/Fuze-Lab/jobs/Entry-Junior-PHPJquery-MySQL-Coder-Team-Member-01790db21236725e"

    request(url, function(err, resp, body){
        var $ = cheerio.load(body);
        var companyName = $('.company');      
        var companyNameText = companyName.text();

        //look at the web page, we want to get thefont attribute
        var jobTitle = $('.jobtitle font');
        var jobTitleText = jobTitle.text();

        var location = $('.location');
        var locationText = location.text();
        
        //get the p tag inside the job_summary by using "#" instead of using ".(to get the class element)"
        var summary = $('#job_summary p');
        var summaryText = summary.text();

        //scraped data are object
        var job = {
        companyName: companyNameText,   
        jobTitle: jobTitleText,        //the name of the key and value pair of hte object
        location: locationText,
        summary: summaryText 
        }

        console.log(job);
    })
   ````    
      <a href="https://ibb.co/iOmvLF"><img src="https://preview.ibb.co/nEFpfF/Screen_Shot_2017_07_13_at_21_56_50.png" alt="Screen_Shot_2017_07_13_at_21_56_50" border="0"></a>  
        
        
