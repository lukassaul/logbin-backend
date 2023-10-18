const axios = require('axios').default;


exports.getTxFee = async function(req, res) {
    
    try {
      const blockHash = await axios.get(`https://electrs.logbin.org/blocks/tip/hash`)
      if (blockHash.data) {
        const block = await axios.get(`https://electrs.logbin.org/block/${blockHash.data}`)
        if (block.data) {
            
            const data = {
                height: block.data.height,
                block: block.data.id,
                timestamp: block.data.timestamp,
                txid: block.data.merkle_root,
                txsize: block.data.size,
                satbyte: 100
            }
            return res.status(200).json({message: data})
        }
      } else {
        return res.status(400).json({message: "Something went wrong please try again later."})
      }
      
    } catch (err) {
      
      return res.status(504).json({message: err})
    }
    
  }
