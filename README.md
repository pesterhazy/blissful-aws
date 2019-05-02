# Blissful AWS

Magic spells for the working AWS magician

## S3 Bucket Policy

How do you make an S3 bucket publicy readable and accessible via unauthenticated HTTPS?

- Create the bucket

    ```
    aws s3 mb s3://NAMEOFTHEBUCKETGOESHERE
    ```

- Try using curl

    ```
    echo HELLO > hello.txt
    aws s3 cp hello.txt s3://NAMEOFTHEBUCKETGOESHERE/
    curl --location https://NAMEOFTHEBUCKETGOESHERE.s3.amazonaws.com/hello.txt
    ```

    This should result in a 403 now because the bucket policy is not set.

- Use [this policy document](s3/s3-bucket-public/s3-bucket-public-readable-policy.json). Make sure you replace NAMEOFTHEBUCKETGOESHERE with the catual name of the S3 bucket

- Apply using

    ```
    aws s3api put-bucket-policy --bucket NAMEOFTHEBUCKETGOESHERE --policy file://policy.json
    ```

- Find the public S3 bucket here ([docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro)):

    ```
    https://NAMEOFTHEBUCKETGOESHERE.s3.amazonaws.com
    ```

- The `curl` command you tried above should work now

- You can upload a folder now:

    ```
    aws s3 sync public/ s3://NAMEOFTHEBUCKETGOESHERE/
    ```

## Simple Lambda/API Gateway REST api for Node.js

Lambda uses its own mini web-framework. [This JavaScript file](lambda/simple-rest-js/index.js) gives you a starting point, a simple service that returns a 200 response.
