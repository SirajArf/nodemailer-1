var express = require('express');
var router = express.Router();
const mail = require('../controllers/methods');

router.post('/send',mail.upload);

module.exports = router;