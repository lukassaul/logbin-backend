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
  console.log("transaction: ", transaction)
  // try {
  //   await btc.sendRawTransaction(`${transaction}`).then(result => {
  //     console.log("testing result", result)
  //     return res.status(200).json({message: result})
  //   })
  // } catch (err) {
  //   console.log("Error message", err)
  //   return res.status(400).json({error: err})
  // }
  
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendrawtransaction","params":["${transaction}"]}`;
    var options = {
      url: `http://exorrpc:Oifkh786dgt@127.0.0.1:9338/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      console.log("response testing error: ", error)
      console.log("response testing status code: ", response.statusCode)
      console.log("response testing body: ", body)
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        console.log("data testing: ", data)
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
  console.log("transaction broadcast r: ", transactions)
  // try {
  //   await btc.sendRawTransaction(`${transactions}`).then(result => {
  //     console.log("testing result", result)
  //     return res.status(200).json({message: result})
  //   })
  //   // const broad = await axios.post('http://localhost:3000/tx', {hex: transactions})
  //   // console.log(broad)
  //   // return res.status(200).json({message: broad})
  // } catch (err) {
  //   console.log("Error message", err)
  //   return res.status(400).json({error: err})
  // }
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendrawtransaction","params":["${transactions}"]}`;
    var options = {
      url: `http://exorrpc:Oifkh786dgt@127.0.0.1:9338/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      console.log("response testing error: ", error)
      console.log("response testing status code: ", response.statusCode)
      console.log("response testing body: ", body)
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        console.log("data testing: ", data)
        return res.status(200).json({message: data});
      } else {
        const data = JSON.parse(body);
        return res.status(response.statusCode).json({error: data});
      }
    };
    request(options, callback);
}
