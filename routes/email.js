var express = require('express');
var router = express.Router();
const mail = require('../controllers/email');

// routes

router.use(express.static("public"));
/*
  * @api {get } /
  * @api homepage
   */
router.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  /*
  * @api {post } /send
  * @apiName Send Mail
   */
router.post('/send',mail.upload);

module.exports = router;