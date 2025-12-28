var express = require('express');
var router = express.Router();
var listUnspent = require('../controller/listunspent')
var broadcast = require('../controller/broadcast')
var balance = require('../controller/getbalance')
var fee = require('../controller/gettxfee')
var coinBalance = require('../controller/coinbalance')
var coinUnspent = require('../controller/coinlistunspent')
var coinBroadcast = require('../controller/coinbroadcast')
var sochainUnspent = require('../controller/sochainUnspent')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', listUnspent.listUnspent);

router.post('/api/broadcast', broadcast.broadcastTransaction);

router.get('/api/broadcast/r', broadcast.broadcastTransactionr);

router.get('/api/balance', balance.getBalance);

router.get('/api/txfee', fee.getTxFee);

router.get('/api/coin/balance', coinBalance.btcLtcBalance)

router.get('/api/coin/utxo', coinUnspent.btcltcUnspent)

router.get('/api/coin/broadcast', coinBroadcast.btcltcBroadcast)

router.get('/api/v3/unspent_outputs/:network/:address/:od', sochainUnspent.btcltcdogeUnspent)

module.exports = router;
