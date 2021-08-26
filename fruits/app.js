const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/personDB");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please specify the name"]
  },
  age: {
    type: Number,
    min:1,
    max:110
  }
  // rating: Number,
  // review: String
});

const Person = mongoose.model("Person",personSchema);

const person1  = new Person(
  {
    name: "Milton",

    age: 21
  }
);
const person2  = new Person(
  {
    name: "Joy",
    age: 22
  }
);
const person3  = new Person(
  {
    name: "Jonny",
    age: 23
  }
);

person1.save();

// Person.insertMany([person1,person2,person3], function(err)
// {
//   if(err)
//   {
//     console.log("error");
//   }
//   else
//   {
//     console.log("Successfully saved the contents to personDB");
//   }
// });



Person.find(function(err,people)
{
  if(err)
  {
    console.log("Error Finding people");

  }
  else
  {
    mongoose.connection.close();
    people.forEach(function(p)
  {
    console.log(p.name)
  })
  }
})



// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//      {
//        name:"Apple",
//        score:8,
//        review: "Great fruit"
//      },
//      {
//        name:"Orange",
//        score:6,
//        review: "Kind Sour"
//      },
//      {
//        name:"Banana",
//        score:9,
//        review: "Great stu ff!"
//      }
//   ], function(err, result) {
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }
