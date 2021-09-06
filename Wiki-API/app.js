const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express();


mongoose.connect('mongodb://localhost:27017/wikiDB');
app.use(express.static("public"));
app.listen(3000, function()
{
  console.log("Server running at port 300")
});
app.use(bodyParser.urlencoded({
  extended: true
}));

const articleSchema =
{
  title: String,
  content: String
}

const Article = mongoose.model("Article",articleSchema);

app.route("/articles")

.get(function(req,res)
{
  Article.find({},function(err,foundArticles)
  {
    if(!err)
    {
        res.send(foundArticles);
    }
    else
    {
      res.send(err);
    }

  })

.post(function(req,res)
  {
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    })
    newArticle.save(function(error)
  {
    if(!error)
    {
      res.send("Data Stored Successfully!");
    }
    else
    {
      res.render("Oops, Error Occured");
    }
  });
  })

.delete(function(req,res)
  {
    Article.deleteMany({},function(error)
  {
    if(!error)
    {
      res.send("Successfully Deleted Everything!");
    }
    else{
      res.send("Error Occured");
    }
  })
  });
