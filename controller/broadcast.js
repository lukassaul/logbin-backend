require("dotenv").config();
const axios = require('axios').default;
const request = require('request');


const headers = {
    "content-type": "text/plain;"
};


exports.broadcastTransaction = async function(req, res) {
  const transaction = req.body.rawtx
  
  
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendrawtransaction","params":["${transaction}"]}`;
    var options = {
      url: `http://${process.env.LOGRPC}:${process.env.LOGPASS}@127.0.0.1:9338/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      console.log("body ", body)
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        
        return res.status(200).json({message: data});
      } else {
        const data = JSON.parse(body);
        return res.status(response.statusCode).json({error: data});
      }
    };
    request(options, callback);
  
  
}

exports.broadcastTransactionr = async function(req, res) {
  const transactions = req.query.transaction
  
  
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendrawtransaction","params":["${transactions}"]}`;
    var options = {
      url: `http://${process.env.LOGRPC}:${process.env.LOGPASS}@127.0.0.1:9338/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      console.log("body ", body)
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        
        return res.status(200).json({message: data});
      } else {
        const data = JSON.parse(body);
        return res.status(response.statusCode).json({error: data});
      }
    };
    request(options, callback);
}
