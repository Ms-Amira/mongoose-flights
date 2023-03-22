const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/ticket');

router.get('/ticket/new', ticketsCtrl.new);

module.exports = router;