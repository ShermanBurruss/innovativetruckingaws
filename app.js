const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();
const https = require("https");
const ejs = require("ejs");

// http.createServer(function (req, res) {
//   }).listen(3000);
//   console.log('Server running');

app.listen(3000, function(req, res){
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

    res.render('index');
})

app.get("/cleanform", function(req,res){
    
    res.render('cleanform', {begDay:begDay, endDay:endDay});
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

// // "\"topics\""
// async function getTruckList(){
//     var lists = [];
//     var groupID = "topics";
//     var trkGroup;
//     var trkNum;
//     var trkType;
//     var trkAvail;
//     console.log(groupID);

//         var qBody= JSON.stringify({query:"query{boards(ids:3886629482){groups(ids:\"topics\"){items{id,name,column_values{text,value}}}}}"});

//             var qRes = await fetch("https://api.monday.com/v2",{
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3OTcyNzE0OCwidWlkIjozMDM3MDczOCwiaWFkIjoiMjAyMi0wOS0wN1QyMDozMzowNS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTIxMTI5OTQsInJnbiI6InVzZTEifQ.kUmLRGRbFxqYmKrTLeCCDAYSkW78P0E6chgGZQ0gKqY'
//                 },
//                 body:qBody
//             })
//             .then(res => res.json())
//             .then(res => JSON.stringify(res, null, 2));
//             qRes=JSON.parse(qRes);
//             console.log(qRes.data.boards[0].groups[0].items[0].name);
//             console.log(qRes.data);
//             for(i=0;i<qRes.data.boards[0].groups[0].items.length;i++){
//                 var li=[];
//                 if(groupID=="topics"){;
//                     trkGroup=2;
//                 }else{
//                     trkGroup=1;
//                 }
//                 trkNum=qRes.data.boards[0].groups[0].items[i].name;
//                 trktype=qRes.data.boards[0].groups[0].items[0].column_values[2].text;
//                 trkAvail=qRes.data.boards[0].groups[0].items[0].column_values[3].text;

//                 li= {trkGroup, trkNum, trkType, trkAvail}
//                 lists.push(li);
//                 console.log(lists);
//             }
            
//     return lists;
// }

