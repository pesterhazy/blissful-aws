"use strict";

// Lambda@Edge trigger to serve index.html when the
// user requests /app/*; use in Cloudfront as a viewer-request
// event

exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  if (/^\/app($|\/)/.test(request.uri) || request.uri == "/") {
    request.uri = "index.html";
  }
  callback(null, request);
};
