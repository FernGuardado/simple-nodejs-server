const http = require('http');
const request = require('request');
// const express = require('express');
const fs = require('fs');

// JSON
const config = require('./config.json');

const server = http.createServer(function (req, res){
    // URLs
    const home ="/";


    if(req.url == home){
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        res.write('<html>');
        res.write('<h1>Simple NodeJs Server</h1>');
        res.write('<h2>'+ config.firstName + " " + 
        config.lastName + '</h2?');
        res.write("</html>");

        fs.readFile('./config.json', 'utf-8', (data, err) => {
            if (err) {
                throw err;
            } 
            // parse JSON string to JSON object
            data = JSON.parse(data);
            data.forEach(function(element){
                res.write(`<h1>${element.firstName} ${element.lastName}</h1>`)
            });
        });

        res.end();

        // API Request
        // request(config, 
        // { json: true }, (err, res, body) => {
           // if (err) { 
             //   return console.log(err); 
            // }
            // console.log(body.firstName);
            //console.log(body.lastName);
          // });
    }
    else{
        res.end("Request Invaild");
    }
});

server.listen(5000);
console.log("Node.js server is running on port 5000");