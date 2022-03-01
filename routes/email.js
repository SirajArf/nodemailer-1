var express = require('express');
var router = express.Router();
const mail = require('../controllers/email');

//static route

router.use(express.static("public"));

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

router.post('/send',mail.upload);

module.exports = router;