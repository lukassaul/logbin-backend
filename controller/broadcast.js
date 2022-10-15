const BitcoinRpc = require('bitcoin-rpc-promise');
const axios = require('axios').default;
const request = require('request');

const config = {
    protocol: 'http',
    user: 'exorrpc',
    pass: 'Oifkh786dgt',
    host: '127.0.0.1',
    port: '9338',
  };

  const headers = {
    "content-type": "text/plain;"
  };

let btc = new BitcoinRpc('http://exorrpc:Oifkh786dgt@127.0.0.1:9338');

exports.broadcastTransaction = async function(req, res) {
  const transaction = req.body.rawtx
  
  
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendrawtransaction","params":["${transaction}"]}`;
    var options = {
      url: `http://exorrpc:Oifkh786dgt@127.0.0.1:9338/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      
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
      url: `http://exorrpc:Oifkh786dgt@127.0.0.1:9338/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      
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
