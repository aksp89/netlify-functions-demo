const sendGrid = require("@sendgrid/mail");
sendGrid.setApiKey("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");

exports.handler =  async (event, context, callback) => {

    try {
await sendGrid.send({
to: "aksp89@gmail.com",
from: "ankur@kapslock.in",
subject: "testing send grid",
text: "hello from kapslock"
});
return {
    statusCode: 200,
    body: "mail sent"
}
    } catch(e) {
return {
    statusCode: e.code,
    body: e.message
}
    }

}