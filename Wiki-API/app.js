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

.get(function(req, res){
  Article.find(function(err, foundArticles){
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
})

.post(function(req, res){

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save(function(err){
    if (!err){
      res.send("Successfully added a new article.");
    } else {
      res.send(err);
    }
  });
})

.delete(function(req, res){

  Article.deleteMany(function(err){
    if (!err){
      res.send("Successfully deleted all articles.");
    } else {
      res.send(err);
    }
  });
});

app.route("/article/:articleTitle")

.get(function(req, res)
{
  Article.findOne({title:req.params.articleTitle},function(err,foundArticle)
{
  if(foundArticle)
  {
    res.send(foundArticle);
  }
  else
  {
    res.send("Article not found");
  }
})
})
.put(function(req,res)
{
  Article.replaceOne({title:req.params.articleTitle},
    {title: req.body.title, cotent:req.body.content},

    function(err,results)
{
    if(results)
    {
      res.send("Successfully Updated!");
    }
    else{
    res.send("Error occured!");
    }
})
})
.patch(function(req,res)
{
  Article.update(
    {title:req.params.articleTitle},
    {$set:req.body},
    function(error,results)
{
if(!error)
{
  res.send("Successfully Updated!");
}
else
{
  res.send("Not Updated!");
}


})

})
.delete(function(req,res)
{
  Article.deleteOne({title:req.params.articleTitle},function(err,results)
{
  if(!err)
  {
    res.send("Successfully Deleted the Article");
  }
  else
  {
    res.send("Error Deleting the Article");
  }
})
})
