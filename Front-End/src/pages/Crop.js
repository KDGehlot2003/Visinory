import React, { useState, useRef } from "react";

export default function Crop() {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFile() {
    fileInputRef.current.click();
  }

  function onFileSelect(e) {
    const file = e.target.files[0];
    if (file && file.type.split('/')[0] === 'image') {
      setImage({
        name: file.name,
        file: file,
        url: URL.createObjectURL(file)
      });
    } else {
      alert(`${file.name} is not an image file`);
    }
  }

  function onDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.split('/')[0] === 'image') {
      setImage({
        name: file.name,
        file: file,
        url: URL.createObjectURL(file)
      });
    } else {
      alert(`${file.name} is not an image file`);
    }
  }

  function onDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  async function uploadImages() {
    if (!image) {
      alert("Please select an image.");
      return;
    }
    setImage({});
    window.location.reload();

  }

  return (
    <>
    <div className='serve'>
    <img src="images/img_div_featured_title.png" alt="Services" />
   <div className='para'>
    <h1>New Here!</h1>
    <ul>
      <li>Please read the instructions mentioned below to upload a valid and accurate image for the scan</li>
      <li>Click image in such a way that only the defected part is visible(For crop)</li>
      <li>Make sure that only crop or soil is visible in the section</li>
      <li>Click a photo with minimum distortion or don't put blurry image</li>
    </ul>
    </div> 
    </div>

    <div className="forms">
    <form action="http://localhost:8001/detect_image/"  method="post" enctype="multipart/form-data"  >
      <div className="throughput">
        <div className="card">
          <div className="top">
            <h1>Upload  Crop Image</h1>
          </div>
          <div
            className="drag-area"
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            style={{ backgroundImage: image ? `url(${image.url})` : 'none', backgroundSize: 'cover' }}
          >
            {image ? (
              <img src={image.url} alt={image.name} style={{ width: '100%', height: '100%' }} />
            ) : (
              isDragging ? (
                <span className="select">Drag image here</span>
              ) : (
                <div>
                 <h1 className="drag"> Drag & Drop image here </h1>
                   <p>or</p>
                  <span className="select" role="button" onClick={selectFile}>Browse image</span>
                </div>
              )
            )}
            <input name="file" type="file" className="file" ref={fileInputRef} onChange={onFileSelect} style={{ display: 'none' }} />
          </div>
          <div className="container"></div>
          <button type="submit" onClick={uploadImages}>Upload</button>
          {/* <button type="button" onClick={onre}>refresh</button> */}
        </div>
      </div>
    </form>
    </div>
      </>
  );
}