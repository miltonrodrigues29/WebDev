const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const ejs = require("ejs");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

var items = [];
app.get("/",function(req,res)
{
 var day="";
 const today = new Date();
 var current_day =  today.getDay();
 // switch(current_day)
 // {
 //   case 0:
 //   day ="Sunday";
 //   break;
 //   case 1: day = "Monday";
 //   break;
 //   case 2: day = "Tuesday";
 //   break;
 //   case 3: day = "Wednesday";
 //   break;
 //   case 4: day = "Thursday";
 //   break;
 //   case 5: day = "Friday";
 //   break;
 //   case 6: day = " Saturday";
 //   break;
 // }

 var options ={
  weekday: "long",
  day: "numeric",
  month: "long"
 }

 day = today.toLocaleDateString("en-US",options);
 console.log(day)
 res.render("list",{ day_of_week : day, items: items})
})

app.post("/",function(req,res)
{
  var new_item = req.body.newitem;
  items.push(new_item);
  res.redirect("/");

} );

app.listen(3000, function(req,res)
{
  console.log("Server running at port 3000")
})
