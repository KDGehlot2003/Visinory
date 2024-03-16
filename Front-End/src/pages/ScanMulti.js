import React , { useState, useRef }from "react"

export default function Services() {
      const  [image , setImage] = useState([]);
      const  [ isDragging , setIsDragging] = useState(false);
      const fileInputRef = useRef(null);

      function SelectFile() {
        fileInputRef.current.click();
      }
      function onFileSelect(e){
        const files = e.target.files;
        if(files.length === 0) return;
        for(let i =0 ; i < files.length; i++){
            if(files[i].type.split('/')[0] !== 'image') {
                alert(`${files[i].name} is not a image file`);
                break;
            };
            if(!image.some((e) => e.name === files[i].name)){
                setImage((prev) => [...prev,{
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                }]);
            }
        }
      }
      function deleteImage(index){
        setImage((prev) => 
            prev.filter((_, i) => i !== index)
        )
      }
      function onDrop(e) {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if(files.length === 0) return;
        for(let i =0 ; i < files.length; i++){
            if(files[i].type.split('/')[0] !== 'image') {
                alert(`${files[i].name} is not a image file`);
                break;
            };
            if(!image.some((e) => e.name === files[i].name)){
                setImage((prev) => [...prev,{
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                }]);
            }
        }
      }
      function ondragover(e) {
        e.preventDefault();
        // Handle the drag over event here
        setIsDragging(true);
        e.dataTransfer.dropEffect = "copy";
      }
      function ondragleave(e) {
        e.preventDefault();
        // Handle the drag leave event here
        setIsDragging(false);
      }
      function upLoadImages(){
        console.log(image);
      }
    return (
        <>
        <div className="card">
          <div className="top">
          <p>Drag and Drop image uploading</p> 
         </div>
         <div 
                className="drag-area" 
                onDragOver={ondragover} 
                onDragLeave={ondragleave} 
                onDrop={onDrop}
                style={{ backgroundImage: image.length > 0 ? `url(${image[0].url})` : 'none', backgroundSize: 'cover' }}
        >
            {
                isDragging ?  <span className="select">
                                 Drag image here
                               </span>: 
                                  <>
                                   Drag & Drop image here or { " " }
                                 <span className="select" role="button" onClick={SelectFile}>
                                  Browse image 
                                </span>
                                  </>
            }
         <input   name="file" type="file" className="file" multiple  ref={fileInputRef} onChange={onFileSelect}></input>
         </div>
         <div className="container">
            {image.map((img, index) => (
            <div className="image" key={index}>
                <span className="delete" onClick={() => deleteImage(index)}>&times;</span>
                <img src={img.url} alt={img.name} />
            </div>
            )) }
            </div> 
          <button type="button" onClick={upLoadImages} > Upload </button>
       </div>
        <h1>Services page</h1>
        </>
    )
}