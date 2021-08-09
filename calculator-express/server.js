const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(req,res)
{
  console.log("Server Running at port 3000");
});


app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");

});

app.get("/bmi-calculator",function(req,res)
{
  res.sendFile(__dirname + "/bmi-calculator.html");
});

app.post("/bmi-calculator", function(req,res)
{
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var bmi = w/ (h*h);

  res.send("BMI: " + bmi);
});
app.post("/",function(req,res)
{
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum = num1 + num2;

  res.send("The sum is " + sum);
});
