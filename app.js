const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const ejs = require("ejs");

// http.createServer(function (req, res) {
//   }).listen(3000);
//   console.log('Server running');

app.listen(8080, function(req, res){
    console.log("Hello");
})


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

var begDay = getSunday(new Date());
var endDay = getSaturday(new Date());
begDay = begDay.toDateString();
console.log(begDay);
endDay = endDay.toDateString();
console.log(endDay);


app.get("/", function(req,res){
    res.render('clearform');
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
  


