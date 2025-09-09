from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello, name = "hello"),
    path('presign-upload/', views.presign_upload, name = "presign_upload"),
    path('list-thumbnails/', views.list_thumbnails, name = "list_thumbnails"),
    path("delete-thumbnails/", views.delete_thumbnails, name = "delete_thumbnails"),
]