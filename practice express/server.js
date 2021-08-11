const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.listen(3000,function(req,res)
{
  console.log("Server Started at Port 3000");
});

app.get("/", function(req,res){

  res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res)
{
  var num = Number(req.body.number1);
  var result = num*num;
  res.send("Square of number is "+result);
});
