var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const flights = require('../models/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/flights', flightsCtrl.create);

module.exports = router;
