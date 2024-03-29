const axios = require('axios').default;

exports.listUnspent = async function(req, res) {
    const address = req.query.address
    let resultJson = {
      address: []
    };
    
    
    try {
      const response_utxo = await axios.get(`https://electrs.logbin.org/address/${address}/utxo`)
      const response_add = await axios.get(`https://electrs.logbin.org/address/${address}/txs`)
      console.log("response utxo ", response_utxo.data)
      console.log("response add ", response_add.data)
      if (response_add.data || !response_utxo.error) {
        
        
        let scriptpub = response_add.data[0].vout.filter(function(pub) {
          return pub.scriptpubkey_address === address;
        })
        
        for (const val of response_utxo.data) {
          resultJson.address.push({
            txid: val.txid,
            vout: val.vout,
            amount: val.value,
            scriptpubkey: scriptpub[0].scriptpubkey,
          })
        }
	console.log(resultJson)
        return res.status(200).json({message: resultJson})
      } else {
        return res.status(400).json({message: "Something went wrong please try again later."})
      }
      
    } catch (err) {
      
      return res.status(504).json({message: err})
    }
    
  }
