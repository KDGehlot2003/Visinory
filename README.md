
# Visinory

"Visinory uses deep learning to help farmers detect crop diseases and soil type detection."


## Installation and Running server

Install my-project with npm

```bash
  cd Front-End
  npm install 
```
To start server for react website
```bash
  npm start
```

For api server you need [python3.8](https://www.python.org/downloads/release/python-3812/). In new terminal.
```bash
cd Back-End
```
To install require package. 

You need to install requirements.txt
```bash
pip install -r requirements.txt
```
For running server for Soil Api.
```bash
cd Crop
python -m uvicorn main_soil:app --host 0.0.0.0 --port 8000 --reload
```
For running server for Crop Api.
```bash
cd Crop
python -m uvicorn main_crop:app --host 0.0.0.0 --port 8001 --reload
```


