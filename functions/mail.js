const mailer = require("nodemailer");
const transporter = mailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "aksp89@gmail.com",
        pass: "GmailAK@19/06/89."
    }
    /*
    tls: {
      rejectUnauthorized: false
    }
    */
});

exports.handler = function (event, context, callback) {
transporter.sendMail({
    from: "Ankur",
    to: "ankur@kapslock.in",
    subject: "Test",
    text: "test mail"
}, function (err) {
if(err) {
    console.log(err);
    callback(null, {
        statusCode: 400,
        body: "Mail not sent"
    });
} else {
    console.log("mail sent");
    callback(null, {
        statusCode: 200,
        body: "mail sent"
    });
}
});
}