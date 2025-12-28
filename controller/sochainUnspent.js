require("dotenv").config();
const axios = require('axios').default;

exports.btcltcdogeUnspent = async function(req, res) {
    const address = req.params.address
    const network = req.params.network
    const od = req.params.od
    console.log("network ", network)

    try {
       const utxo = await axios.get(`https://chain.so/api/v3/unspent_outputs/${network}/${address}/${od}`, {
          headers: {
                'Accept': 'application/json',
                    'API-KEY': process.env.APIKEY,
              }
          })
          console.log("utxo ", utxo.data)
          return res.status(200).json(utxo.data)
      } catch (error) {
          return res.status(400).json({message: "Something went wrong please try again later."})
     }
}
