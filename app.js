const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/cleantruck", function(req,res){
    res.sendFile(__dirname + "/cleantruck.html");
})











app.listen(80, function(req, res){
console.log("Listening on port 3000.")

})