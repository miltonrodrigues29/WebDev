const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const ejs = require("ejs");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var items = [];
var workItems =[];
app.get("/",function(req,res)
{
 var day="";
 const today = new Date();
 var current_day =  today.getDay();

 var options ={
  weekday: "long",
  day: "numeric",
  month: "long"
 }

 day = today.toLocaleDateString("en-US",options);
 console.log(day)
 res.render("list",{ listTitle: day, items: items})
})

app.post("/",function(req,res)
{

  var new_item = req.body.newitem;
  console.log(req.body.list);
  if(req.body.list == "Work")
  {
    workItems.push(new_item);
    res.redirect("/work");
  }
  else
  {
    console.log("Iam in else part");
    items.push(new_item);
    res.redirect("/");
  }


} );

app.get("/work",function(req,res)
{
  res.render("list",{listTitle :"Work List", items:workItems })
})

app.get("/about",function(req,res)
{
  res.render("about");
})

app.listen(process.env.PORT || 3000, function(req,res)
{
  console.log("Server running at port 3000")
})
