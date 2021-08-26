const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser: true});

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
      client.close();
    });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
     {
       name:"Apple",
       score:8,
       review: "Great fruit"
     },
     {
       name:"Orange",
       score:6,
       review: "Kind Sour"
     },
     {
       name:"Banana",
       score:9,
       review: "Great stu ff!"
     }
  ], function(err, result) {
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
