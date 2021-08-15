const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const ba = require('bitcoinaverage');
var publicKey = 'MjVmMDdiMTU5ZmQ4NDliMjgyY2IxN2YyYTQ1ODI3YjE';
var secretKey = 'NzgwOGY5ZGY4MDE4NDBhZGEyMGU1MWM1MDVjODljODAyZjZmOTNhZmI5YTE0M2M0ODJkYzM4MzJmNDcxNzVlZA==';
var restClient = ba.restfulClient(publicKey, secretKey);
var wsClient =  ba.websocketClient(publicKey, secretKey);
const app = express()
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(req,res)
{
  console.log("Server running at port 3000")
});


// app.post("/",function(req,res)
// {
//   // var crypto = req.body.crypto;
//   // var fiat = req.body.fiat;
//   // console.log(crypto,fiat);
//   request("https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC&fiat=USD,EUR",function(err,res,body)
//   {
//     console.log(res.statusCode)
//   });


//
// });

app.post("/",function(req,res)
{

      var symbol_set = 'global';
      var symbol     =  req.body.crypto + req.body.fiat;

      restClient.getTickerDataPerSymbol(symbol_set, symbol,

        function(res) {


                   var price = JSON.parse(res)
                   // console.log(price)
                   console.log(price.ask)
                   

        //            },
        // function(error){
        //          console.log(error);
        }) ;






});




app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");
})
