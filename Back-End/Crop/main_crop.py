from fastapi import FastAPI, File, UploadFile, HTTPException, Request, Form
from typing import Optional
from tempfile import NamedTemporaryFile
from shutil import copyfileobj
from PIL import Image
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import hashlib
import os

# model_path = os.environ.get("my_model.h5")
model_path = "model.h5"


import detect_crop


app = FastAPI()
templates = Jinja2Templates(directory="templates")

hdf5_model = detect_crop.load_hdf5_model(model_path)

def calculate_file_hash(file):
    """Calculate the SHA-256 hash of the uploaded file."""
    return hashlib.sha256(file.file.read()).hexdigest()


def save_uploaded_image_to_temp_file(file):
    """Save the uploaded image to a temporary file."""
    _, extension = os.path.splitext(file.filename)
    with NamedTemporaryFile(suffix=extension, delete=False) as temp_image:
        temp_image.write(file.file.read())
        temp_image.flush()
        return temp_image.name


def convert_to_jpeg_if_necessary(image_path):
    """Convert the image to JPEG format if it's not already."""
    with Image.open(image_path) as img:
        if img.format != "JPEG":
            temp_jpeg_path = os.path.splitext(image_path)[0] + ".jpg"
            img.convert("RGB").save(temp_jpeg_path, "JPEG")
            return temp_jpeg_path
    return image_path
    
@app.get("/")
async def index():
    with open("templates/upload.html", "r") as file:
        upload_content = file.read()
    return HTMLResponse(content=upload_content, status_code=200)


@app.post("/detect_image/", response_class=HTMLResponse)
# async def detect_image_endpoint(file: UploadFile = File(...)):
async def detect_image_endpoint(request: Request,file: UploadFile = File(...)):
    # Check if file is an image
    if file.content_type.startswith("image"):
        try:
            # Convert the image to JPEG format if necessary
            orignal_image = save_uploaded_image_to_temp_file(file)
            temp_image_path = convert_to_jpeg_if_necessary(orignal_image)
            # Perform image detection
            output_string = detect_crop.test_model_with_labels(
                hdf5_model, temp_image_path, detect_crop.CLASS_NAMES
            )

            if orignal_image != temp_image_path:
                os.remove(orignal_image)
            os.remove(temp_image_path)


            # with open("templates/result.html", "r") as file:
            #     result_content = file.read()
            return templates.TemplateResponse("result.html", {"request": request, "variable": output_string})
            # return templates.TemplateResponse("result.html", {"variable": output_string})
            # return HTMLResponse(content=result_content, status_code=200)
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
    else:
        raise HTTPException(status_code=400, detail="Uploaded file is not an image.")