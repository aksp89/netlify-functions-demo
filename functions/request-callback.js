const mailer = require("nodemailer");
const transporter = mailer.createTransport({
    host: "smtp.kapslock.in",
    port: 465,
    secure: true,
    auth: {
      user: "ankur@kapslock.in",
        pass: "a190689k"
    },

    tls: {
      rejectUnauthorized: false
    }
    
});

exports.handler = function (event, context, callback) {
    let data = JSON.parse(event.body);
transporter.sendMail({
    from: "Ankur@kapslock.in",
    to: "aksp89@gmail.com",
    subject: "Callback request from website",
    text: `${data.name} with phone number ${data.phone} has requested a call back.`
}, function (err) {
if(err) {
    console.log(err);
    callback(null, {
        statusCode: 400,
        body: `error: ${err}`
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
