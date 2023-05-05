const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/cleantruck", function(req,res){
    res.send("<iframe src='https://forms.monday.com/forms/embed/252e9dac3a60649883afc60aa0d516c4?r=use1' width='650' height='500' style='border: 0; box-shadow: 5px 5px 56px 0px rgba(0,0,0,0.25);'></iframe>");
});





app.listen(3000, function(){
    console.log("Server started on port 3000.");
});