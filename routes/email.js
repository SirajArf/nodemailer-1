var express = require('express');
var router = express.Router();
const mail = require('../controllers/email');

router.post('/send',mail.upload);

module.exports = router;