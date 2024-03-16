import joblib
import tensorflow as tf
import numpy as np

from PIL import Image
import numpy as np


CLASS_NAMES =  ['Black Soil', 'Cinder Soil', 'Laterite Soil', 'Peat Soil', 'Yellow Soil']


def preprocess_image(image_path, target_size=(224, 224)):
    img = Image.open(image_path)
    img = img.resize(target_size)
    img_array = np.array(img)
    img_array = img_array / 255.0  # Normalize pixel values to [0, 1]
    return np.expand_dims(img_array, axis=0)


def test_model_with_labels(model, image_path, class_names):
    img = preprocess_image(image_path)
    prediction = model.predict(img)
    predicted_class_index = np.argmax(prediction)
    predicted_class = class_names[predicted_class_index]
    return predicted_class

def test_model_with_labels_index(model, image_path, class_names):
    img = preprocess_image(image_path)
    prediction = model.predict(img)
    predicted_class_index = np.argmax(prediction)
    predicted_class = class_names[predicted_class_index]
    return predicted_class_index


def load_hdf5_model(model_path):
    return tf.keras.models.load_model(model_path)



def test_model(model, image_path):
    img = preprocess_image(image_path)
    prediction = model.predict(img)
    return prediction

