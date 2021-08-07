const mailer = require("nodemailer");
const transporter = mailer.createTransport({
    host: "mail.kapslock.in",
    port: 465,
    auth: {
      user: "ankur@kapslock.in",
        pass: "a190689k"
    },
    
    tls: {
      rejectUnauthorized: false
    }
    
});

exports.handler = function (event, context, callback) {
    transporter.verify(function(error, success) {
        if (error) {
             console.log(error);
        } else {
             console.log('Server is ready to take our messages');
        }
     });

transporter.sendMail({
    from: "Ankur",
    to: "aksp89@gmail.com",
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