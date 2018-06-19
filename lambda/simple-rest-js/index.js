"use strict";

/*
  Simple Lambda JavaScript handler that just returns back a 200 response.

  Use as `index.handler` in AWS SAM
*/

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Welcome",
      path: event.path,
      httpMethod: event.httpMethod
    })
  };

  callback(null, response);
};
