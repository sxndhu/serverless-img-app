import boto3 
import os
from PIL import Image
import io

s3 = boto3.client('s3')

def lambda_handler(event, context):
    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']

        if not key.startswith("uploads/"):
            print(f"Skipping non-upload object: {key}")
            continue
        
        response = s3.get_object(Bucket=bucket, Key=key)
        img_data = response['Body'].read()

        img = Image.open(io.BytesIO(img_data))

        img.thumbnail((150, 150))
        
        buffer = io.BytesIO()
        img.save(buffer, format = img.format)
        buffer.seek(0)

        filename = key.split('/')[-1]  # gets last part of the path
        thumb_key = f"thumbnails/{filename}"

        s3.put_object(
            Bucket = bucket,
            Key = thumb_key,
            Body = buffer,
            ContentType = response['ContentType']
        )

        print(f"Thumbnail saved at {thumb_key}")

    return {'status' : 'done'}