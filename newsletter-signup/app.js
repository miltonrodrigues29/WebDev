const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const http = require('http')

const app = express()

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}))

app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res)
{
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;
  console.log(firstName,lastName,email)

  var data ={
    members : [

      {
        email_address : "mil10rodrigz@gmail.com",
        status : "subscribed",
        merge_fields: {
          FNAME : "Milton",
          LNAME : "Rodrigues"
        }

      }
    ]
  };

  var jsonData = JSON.stringify(data);


https.request(url,options, function(response)
{

})

})

curl -X POST \
  'https://${dc}.api.mailchimp.com/3.0/lists/{list_id}?skip_merge_validation=<SOME_BOOLEAN_VALUE>&skip_duplicate_check=<SOME_BOOLEAN_VALUE>' \
  --user "anystring:${apikey}"' \
  -d '{"members":[],"update_existing":false}'

app.listen(3000, function(req,res)
{
  console.log("Server running at port 3000")
})

// 2c11bc941efe69fc3bcdc1b13984
// 9c75755e3e
