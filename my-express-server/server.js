//jshint esversion:6
const express= require("express");
const app = express();
app.get("/", function(req,res)
{
  res.send("Hello");
});

app.get("/contact",function(req,res)
{
  res.send("You can mail me at rodriguesmilton21@gmail.com");
});

app.get("/hobbies",function(req,res)
{
  res.send("My hobbies include playing games, watching esports");
});
app.get("/services",function(req,res)
{
  res.send("<ul><li>Editing</li><li>Web Development</li><li>web hosting</li></ul>");
});
app.listen(3000,function()
{
  console.log("Server Starting at port 3000");

});
