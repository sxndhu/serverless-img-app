import boto3 
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

BUCKET_NAME = ""
s3_client = boto3.client('s3')

def hello(request):
    return HttpResponse("Hello, backend is working!")

def presign_upload(request):
    filename = request.GET.get("filename")
    filetype = request.GET.get("filetype")

    key = f"uploads/{filename}"

    upload_url = s3_client.generate_presigned_url(
        ClientMethod = 'put_object',
        Params = {
            'Bucket' : BUCKET_NAME, 
            'Key' : key, 
            'ContentType' : filetype
        },
        ExpiresIn = 3600
    )

    return JsonResponse({'uploadUrl' : upload_url, 'key' : key})

def list_thumbnails(request):
    
    response = s3_client.list_objects_v2(
        Bucket = BUCKET_NAME,
        Prefix = "thumbnails/"
    )

    urls = []
    if "Contents" in response:
        for obj in response["Contents"]:
            key = obj["key"]
            if key.endswith("/"):
                continue
            
            presigned_url = s3_client.generate_presigned_url(
                ClientMethod = 'get_object',
                Params = {'Bucket' : BUCKET_NAME, 'Key' : key},
                ExpiresIn = 3600,
            )
            urls.append({'key' : key, 'url' : presigned_url})

    return JsonResponse({'thumnbnails' : urls})


@csrf_exempt
def delete_thumbnails(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            key = data.get("key")

            if not key:
                return JsonResponse({"error" : "No key provided"}, status = 400)

            s3_client.delete_object(Bucket = BUCKET_NAME, Key = key)
            return JsonResponse({"status" : "deleted", "key" : key})
        except Exception as e:
            return JsonResponse({"error" : str(e) }, status = 500)

    return JsonResponse({"error" : "Method not allowed"}, status = 405)