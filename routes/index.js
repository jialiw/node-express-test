var express = require('express');
var router = express.Router();

// let index = require('../controllers/index');
let landing = require('../controllers/landing');

/* GET home page. */
// router.get('/', index.index);
router.get('/', landing.get_landing);
router.get('/', landing.submit_lead);

module.exports = router;
