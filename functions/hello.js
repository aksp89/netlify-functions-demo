const helloController = require("./controllers/hello-controller");
exports.handler = function (event, context, callback) {
    let result = helloController.helloC();
    callback(null, {
statusCode: 200,
body: `result: ${result}`
    });
}