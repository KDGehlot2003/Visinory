import joblib
import tensorflow as tf
import numpy as np

from PIL import Image
import numpy as np


# Load the pickle model
def load_pickle_model(model_path):
    return joblib.load(model_path)


# Load the HDF5 model
def load_hdf5_model(model_path):
    return tf.keras.models.load_model(model_path,compile=False)


CLASS_NAMES = [
    "Corn___Common_Rust",  
    "Corn___Gray_Leaf_Spot",
    "Corn___Healthy",
    "Corn___Northern_Leaf_Blight",
    "Potato___Early_Blight",
    "Potato___Healthy",
    "Potato___Late_Blight",
    "Rice___Brown_Spot",
    "Rice___Healthy",
    "Rice___Leaf_Blast",
    "Rice___Neck_Blast",
    "Sugarcane Bacterial Blight",
    "Sugarcane Healthy",
    "Sugarcane Red Rot",
    "Wheat___Brown_Rust",
    "Wheat___Healthy",
    "Wheat___Yellow_Rust",
]



def preprocess_image(image_path):
    img = Image.open(image_path)
    img = img.resize((256, 256))  # adjust target_size to match model input size
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array
def test_model_with_labels(model, image_path, class_names):
    img = preprocess_image(image_path)
    prediction = model.predict(img)
    predicted_class_index = np.argmax(prediction)
    predicted_class = class_names[predicted_class_index]
    return predicted_class
