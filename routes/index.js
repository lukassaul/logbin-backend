var express = require('express');
var router = express.Router();
var listUnspent = require('../controller/listunspent')
var broadcast = require('../controller/broadcast')
var balance = require('../controller/getbalance')
var fee = require('../controller/gettxfee')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', listUnspent.listUnspent);

router.post('/api/broadcast', broadcast.broadcastTransaction);

router.get('/api/broadcast/r', broadcast.broadcastTransactionr);

router.get('/api/balance', balance.getBalance);

router.get('/api/txfee', fee.getTxFee);

module.exports = router;
