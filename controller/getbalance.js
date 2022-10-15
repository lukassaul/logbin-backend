const axios = require('axios').default;

exports.getBalance = async function(req, res) {
    const address = req.query.address
    let resultJson = {
      address: []
    };
    
    
    try {
      const balance = await axios.get(`http://localhost:3000/address/${address}`)
      
      if (balance.data) {
        
        
        
        return res.status(200).json({message: balance.data})
      } else {
        return res.status(400).json({message: "Something went wrong please try again later."})
      }
      
    } catch (err) {
      
      return res.status(504).json({message: err})
    }
    
  }
