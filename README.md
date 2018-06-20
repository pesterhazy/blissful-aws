# Blissful AWS

Magic spells for the working AWS magician

## S3 Bucket Policy

How do you make an S3 bucket publicy readable and accessible via unauthenticated HTTP?

Use [this policy document](s3/s3-bucket-public/s3-bucket-public-readable-policy.json).

## Simple Lambda/API Gateway REST api for Node.js

Lambda uses its own mini web-framework. [This JavaScript file](lambda/simple-rest-js/index.js) gives you a starting point, a simple service that returns a 200 response.
