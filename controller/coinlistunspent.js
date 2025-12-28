require("dotenv").config();
const axios = require('axios').default;

exports.btcltcUnspent = async function(req, res) {
    const address = req.query.address
    const currency = req.query.currency

    const cur = String(currency).replace(/"/g, '').trim().toUpperCase();

    if (cur === "BTC") {
        try {
            const utxo = await axios.get(`https://chain.so/api/v3/unspent_outputs/BTC/${address}/1`, {
                headers: {
                    'Accept': 'application/json',
                    'API-KEY': process.env.APIKEY,
                }
            })
            console.log("utxo ", utxo.data)
            return res.status(200).json({message: utxo.data})
        } catch (error) {
            return res.status(400).json({message: "Something went wrong please try again later."})
        }
    } else {
        try {
            const utxo = await axios.get(`https://chain.so/api/v3/unspent_outputs/LTC/${address}/1`, {
                headers: {
                    'Accept': 'application/json',
                    'API-KEY': process.env.APIKEY,
                }
            })
            console.log("utxo ", utxo.data)
            return res.status(200).json({message: utxo.data})
        } catch (error) {
            return res.status(400).json({message: "Something went wrong please try again later."})
        }
    }
}