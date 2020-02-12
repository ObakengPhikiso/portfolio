var functions = require("firebase-functions");
var admin = require("firebase-admin");
admin.initializeApp();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var cors = require("cors")({
  origin: true
});
require('dotenv').config();

exports.emailMessage = functions.https.onRequest((req, res) => {
  var { name, email, message } = req.body;
  return cors(req, res, () => {
    var text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${message || ""}</p>
    </div>`;
     var sesAccessKey = 'obakeng.phikiso@gmail.com';
     var sesSecretKey = '0836663010d12';

     var transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      auth: {
          user: sesAccessKey,
          pass: sesSecretKey
      }
    }));

    var mailOptions = {
      to: sesAccessKey,
      from: email,
      subject: `${name} sent you a new message`,
      text: text,
      html: text
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
     if(error){
        console.log(error.message);
     }
     res.status(200).send({
       message: "success"
     });
    });
  });
});

