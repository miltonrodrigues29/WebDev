const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const app = express();


mongoose.connect('mongodb://localhost:27017/wikiDB');
app.listen(3000, function()
{
  console.log("Server running at port 300")
});

const wikiSchema =
{
  title: String,
  content: String
}

Item = mongoose.model("Wiki",wikiSchema);


app.get("/",function(req,res)
{
  const item1 = Item({
    title: "Test 1",
    content: "Test 1 content"
  })
  
  item1.save(function(error)
{
  if(!error)
  {
    console.log("Item Saved Successfully");
  }
})

});
