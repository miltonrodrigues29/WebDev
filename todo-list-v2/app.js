//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



// mongoose.connect("mongodb://localhost:27017/todolistDB", {
//   useNewUrlParser: true
// });

mongoose.connect("mongodb+srv://admin-milton:Test-123@cluster0.e94j7.mongodb.net/todolistDB", {
  useNewUrlParser: true
});

const itemsSchema = {
  name: String
}

Item = mongoose.model("Item", itemsSchema);




const item1 = new Item({
  name: "Welcome to your todolist"
});

const item2 = new Item({
  name: "Hit the + button to add  a new item"
});

const item3 = new Item({
  name: "<---Hit this to delete an Item"
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
}

const List = mongoose.model("List",listSchema);



app.get("/", function(req, res) {

  Item.find({}, function(err, foundItems) {

    if (foundItems.length == 0) {
      Item.insertMany(defaultItems, function(err) {
        if (err) {
          console.log("ERROR OCCURED");
        } else {
          console.log("Successfully Inserted the elements");
        }

      });
      res.redirect("/");
    } else {
      // console.log(foundItems);
      res.render("list", {
        listTitle: "Today",
        newListItems: foundItems
      });
    }


  });



});

app.post("/", function(req, res) {

const itemName= req.body.newItem;
const listName= req.body.list;

const item = Item(
  {
    name: itemName
  }
);

if(listName=="Today")
{
  item.save();
  res.redirect("/");
}
else
{
  List.findOne({name:listName},function(err,foundList)
{
  foundList.items.push(item);
  foundList.save();
  res.redirect("/"+listName);
})
}




});

app.post("/delete",function(req,res)
{
 const checkedItemId = req.body.checkbox;
 const listName = req.body.listName;
 if(listName == "Today")
 {
   Item.findByIdAndRemove(checkedItemId,function(err)
  {
    if(!err)
    {
      console.log("Successfully deleted the item!");
    }
  });
  res.redirect("/");
 }
 else
 {
   List.findOneAndUpdate({name:listName},{$pull: {items:{_id:checkedItemId}}},function(err, foundList)
 {
   if(!err)
   {
     res.redirect("/"+listName);
   }
 });

 }



});

// app.get("/work", function(req, res) {
//   res.render("list", {
//     listTitle: "Work List",
//     newListItems: workItems
//   });
// });

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/:customListName",function(req,res)
{
  const customListName = req.params.customListName;
  const itemName= req.body.newItem;

})

app.get("/:customListName", function(req,res)
{

  const customListName = _.capitalize(req.params.customListName)

   List.findOne({name:customListName},function(err,foundList)
   {
     if(!err)
     {

       if(!foundList)
       {
         console.log("List Does not exist! Creating the list");
         const list = new List(
           {
             name:customListName,
             items:defaultItems
           }

         );
         list.save();
         res.redirect("/"+ customListName);
       }
       else
       {
         console.log("Items already exists");
         res.render("list",{listTitle:foundList.name, newListItems: foundList.items});
       }


     }
     else
     {
       console.log("Error while searching for the element");
     }
   }
 )

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
  console.log("Server started Successfully");
});
