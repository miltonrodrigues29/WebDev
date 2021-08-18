const express = require("express")
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){

  res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res)
{
  var num = Number(req.body.height);
  var result = num*num;
  res.send("Square of number is "+result);
});

app.listen(3000,function(req,res)
{
  console.log("Server Started at Port 3000");
});


// const express = require("express")
// const bodyParser = require("body-parser");
// const app = express()
//
// app.use(bodyParser.urlencoded({extended:true}));
//
//
// app.get("/", function(req,res){
//
//   res.sendFile(__dirname+"/index.html");
//
// });
//
// app.post("/",function(req,res)
// {
//   var num = Number(req.body.height);
//   var result = num*num;
//   res.send("Square of number is "+result);
// });
//
// app.listen(3000,function(req,res)
// {
//   console.log("Server Started at Port 3000");
// });
