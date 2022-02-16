const nodemailer = require('nodemailer');
require('dotenv').config();
const multer = require('multer')
var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./images");
    },
    filename: function(req, file, callback){
        callback(null, file.fieldname + "_" + Date.now() + '_' + file.originalname);
    }
});

var upload  = multer({
    storage: Storage
}).single("image");

upload(req, res, function(err){
    console.log(req.body)
    var obj={
        to : req.body.to,
        subject : req.body.subject,
        body : req.body.body
        }
    if(err){
        console.log(err);
       return res.send("Something went wrong");
    }else {
        if(req.file?.path){
            obj = {...obj,path:req.file.path}
    }
       

        var transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            auth: {
              user: process.env.USERNAME1,
              pass: process.env.PASSWORD
            }
          });
          var mailOptions ={
            from: process.env.USERNAME1,
            to: obj.to,
            subject:obj.subject,
            text:obj.body      
         } 
if(req.file?.path){
 mailOptions = {
    ...mailOptions, attachments: [
      {
       path: obj.path
      }
   ]
    };
}
        
         
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error)
            } else {
                console.log('EMAIL sent: ' + info.response);
                fs.unlink(obj.path, function(err){
                    if(err){
                        return res.send(err)
                    } else {
                        console.log("attachments deleted");
                        return res.redirect('/result.html')
                    }
                })
            }
        })
    }
})

module.exports=[
    upload
]