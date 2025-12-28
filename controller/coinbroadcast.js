require("dotenv").config();
const axios = require('axios').default;


exports.btcltcBroadcast = async function(req, res) {
    const txid = req.query.txid
    const currency = req.query.currency
    console.log("txid ", typeof(txid))
    console.log("currency", currency)
    // console.log("env ", process.env.APIKEY)
    
    try {
        const broadcast = await axios({url: `https://chain.so/api/v3/broadcast_transaction/${currency}`,
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'API-KEY': process.env.APIKEY,
            },
            data: {
                tx_hex : txid
            } 
        })
        console.log("utxo ", broadcast.data)
        return res.status(200).json({message: broadcast.data})
    } catch (error) {
        console.log("error ", error.message)
        return res.status(400).json({message: "Something went wrong please try again later."})
    }
}