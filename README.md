# Serverless Image Upload & Thumbnail Generator

![Project Banner](https://img.shields.io/badge/Status-Completed-brightgreen)

A full-stack serverless image upload application built with **React.js**, **Django REST Framework**, and **AWS (S3 + Lambda)**.  
Users can upload images, automatically generate thumbnails, view them, and delete them — all handled in a **serverless architecture**.

---

## Features

- **File Upload:** Users can upload images directly from the browser.  
- **Automatic Thumbnail Generation:** Lambda function resizes images to `150x150px` and stores in S3.  
- **Thumbnail Listing:** Frontend fetches all thumbnails dynamically.  
- **Delete Functionality:** Remove images and thumbnails from S3.  
- **Serverless Architecture:** Uses AWS S3 for storage and AWS Lambda for image processing.  
- **React + Django Integration:** React frontend communicates with Django backend via presigned URLs.  
- **CORS Handling:** Frontend communicates with backend safely during development.  

---

## Tech Stack

- **Frontend:** React.js, Bootstrap  
- **Backend:** Django REST Framework  
- **Serverless:** AWS S3 (uploads & thumbnails), AWS Lambda (Python 3.10)  
- **Python Libraries:** `boto3`, `Pillow`  
- **State Management:** React `useState` and `useEffect` hooks  
- **HTTP Requests:** Axios  

---

## Project Structure

serverless-thumbnail-img/

├─ backend/ # Django project

├─ frontend/ # React project

├─ lambda/ # Python Lambda function for resizing images

├─ img/ # Python virtual environment (backend)

├─ README.md

## Setup Instructions

### Backend (Django)

1. Activate your Python environment:
- source img/bin/activate

2. Install dependencies:
- pip install -r requirements.txt

3. Run Django server:
- python manage.py runserver

### Frontend (React)

1. Navigate to the frontend folder:

- cd frontend


2. Install dependencies:

- npm install


3. Start React development server:

- npm start


## Usage 

1. Open the frontend at http://localhost:3000.
2. Click Choose File → select an image → click Upload.
3. Thumbnail appears automatically below the upload section.
4. Click Delete to remove the image and its thumbnail from S3.

## Lambda Function

1. Written in Python 3.10 using boto3 and Pillow.
2. Triggered automatically on S3 upload to uploads/ folder.
3. Resizes image to 150x150 and saves to thumbnails/ folder.
4. Packaged as a .zip for deployment in AWS Lambda.

## Key Learnings / Highlights

1. Working with presigned URLs for secure S3 uploads.
2. Serverless architecture and integrating AWS Lambda with S3.
3. Handling CORS issues between React and Django.
4. State management in React for auto-refreshing content.
5. Writing clean, production-ready full-stack applications.

## Future Improvements

1. Add user authentication and per-user storage.
2. Optimize Lambda for multiple image formats.
3. Add drag-and-drop upload and progress indicators.
4. Deploy frontend on Vercel / Netlify and backend on AWS Elastic Beanstalk.

# Author


Angad Singh Sandhu – Full-stack Developer | [LinkedIn](https://www.linkedin.com/in/angad277/)


