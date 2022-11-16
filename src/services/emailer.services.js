const nodemailer = require("nodemailer");

exports.sendEmail = async function sendEmail(obj, To, data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let SMTPConfigObj = {
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  };

  if (process.env.Host == "Gmail") {
    SMTPConfigObj.service = process.env.Host;
  } else {
    SMTPConfigObj.host = process.env.Host;
    SMTPConfigObj.service = process.env.Host;
    SMTPConfigObj.port = process.env.port;
    SMTPConfigObj.secure = process.env.IsSSL;
  }

  if (Array.isArray(To)) {
    To = To.join("; ");
  }
  var message = {
    // sender info
    from: process.env.Email || process.env.email,
    // Comma separated list of recipients
    to: To,
    // Subject of the message
    subject: obj.Subject,
    // HTML body
    html: obj.message,
  };

  obj.fromAddress = process.env.Email;
  if (obj.cc) {
    message.cc = obj.cc;
  }
  if (obj.bcc) {
    message.bcc = obj.bcc;
  }
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(SMTPConfigObj);
  // send mail with defined transport object
  return transporter.sendMail(message);
};
