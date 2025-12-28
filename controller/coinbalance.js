require("dotenv").config();
const axios = require('axios').default;

exports.btcLtcBalance = async function(req, res) {
    const address = req.query.address
    const currency = req.query.currency
    console.log("address ", address)
    console.log("currency ", currency)

    const cur = String(currency).replace(/"/g, '').trim().toUpperCase();

    if (cur === "BTC") {
        try {
            const balance = await axios.get(`https://chain.so/api/v3/balance/BTC/${address}`, {
                headers: {
                    'Accept': 'application/json',
                    'API-KEY': process.env.APIKEY,
                }
            })
            console.log("btc balance ", balance.data)
            return res.status(200).json({message: balance.data})
        } catch (error) {
            return res.status(400).json({message: "Something went wrong please try again later."})
        }
    } else {
        try {
            const balance = await axios.get(`https://chain.so/api/v3/balance/LTC/${address}`, {
                headers: {
                    'Accept': 'application/json',
                    'API-KEY': process.env.APIKEY,
                }
            })
            console.log("ltc balance ", balance.data)
            return res.status(200).json({message: balance.data})
        } catch (error) {
            return res.status(400).json({message: "Something went wrong please try again later."})
        }
    }
}