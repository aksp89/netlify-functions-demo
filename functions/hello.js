const helloController = require("../controllers/hello-controller");

exports.handler = function (event, context, callback) {
    let data = JSON.parse(event.body);
console.log(event);
    callback(null, {
statusCode: 200,
body: `hello ${data.name}`
    });
}