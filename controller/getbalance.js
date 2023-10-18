const axios = require('axios').default;

exports.getBalance = async function(req, res) {
    const address = req.query.address
    // let resultJson = {
    //   address: []
    // };
    let bal = [];
    
    
    try {
      const balance = await axios.get(`https://electrs.logbin.org/address/${address}/utxo`)
      console.log(balance.data)
      
      if (balance.data) {
        for (const val of balance.data) {
          bal.push(val.value)
        }
        
        return res.status(200).json({message: bal.reduce((a, b) => a + b, 0)})
      } else {
        return res.status(400).json({message: "Something went wrong please try again later."})
      }
      
    } catch (err) {
      
      return res.status(504).json({message: err})
    }
    
  }
