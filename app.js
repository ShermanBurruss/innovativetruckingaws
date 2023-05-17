const express = require("express");
const bodyParser = require("body-parser");
const https = require('https')
const http = require('http')
const app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

var begDay = getSunday(new Date());
var endDay = getSaturday(new Date());
begDay = begDay.toDateString();
console.log(begDay);
endDay = endDay.toDateString();
console.log(endDay);

http.createServer(app).listen(80);

// app.listen(80, function(){
//     console.log("Listening on port 3000.");
//     })

app.get("/", function(req,res){
    res.render('index');
})

app.get("/cleanform", function(req,res){
    res.render('cleanform', {begDay:begDay, endDay:endDay} );
})



function getSunday(d) {
    d = new Date(d);
    var day = d.getDay();
    diff = d.getDate() - day; 
    return new Date(d.setDate(diff));
}
  
function getSaturday(d) {
    d = new Date(d);
    var day = d.getDay();
    diff = d.getDate() + (6-day);
    return new Date(d.setDate(diff));
}
  


