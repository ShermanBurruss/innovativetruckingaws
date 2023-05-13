const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

var begDay = getSunday(new Date());
var endDay = getSaturday(new Date());
begDay = begDay.toDateString();
endDay = endDay.toDateString();

app.get("/", function(req,res){
    res.render("index", {} );
})

app.get("/contact", function(req,res){
    res.render("contact", {} );
})

app.get("/about", function(req,res){
    res.render("about", {} );
})

app.get("/gallery", function(req,res){
    res.render("gallery", {} );
})

app.get("/cleanform", function(req,res){
    res.render("cleanform", {begDay:begDay, endDay:endDay} );
})

app.listen(443, function(req, res){
    console.log("Listening on port 3000.");
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
  


