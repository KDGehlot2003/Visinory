import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Services() {
  return (
    <div>
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
        <h1 className='quest'>What do you want to upload?</h1>
      </div>
  
     
      <div className='serve-cards'>
        <div className='serve-card'>
          <img src="images/idk1.jpg" alt="Soil" />
          <h2>Soil</h2>
          <p>Soil is a mixture of organic matter, minerals, gases, liquids, and organisms that together support life.</p>
          <NavLink to="/soil">
          <button>Upload</button>
          </NavLink>
        </div>
        <div className='serve-card'>
          <img src="images/idk2.jpg" alt="Crop" />
          <h2>Crop</h2>
          <p>A crop is a plant or animal product that can be grown and harvested extensively for profit or subsistence.</p>
          <NavLink to="/crop">
          <button>Upload</button>
          </NavLink>
        </div>
      </div>
      <div className='info-div'>
        <h1 className='hhh'> Advanced Crop Disease and Soil Type Detection Using Deep Learning</h1>
        <p>
      Our groundbreaking project harnesses the power of deep learning technology to revolutionize crop management and agricultural practices. By employing state-of-the-art deep learning algorithms, we have developed a sophisticated system capable of accurately identifying crop diseases and determining soil types through image analysis.

      Gone are the days of labor-intensive manual inspections and guesswork in diagnosing crop diseases. Our innovative solution utilizes cutting-edge convolutional neural networks (CNNs) to analyze images of crops with unparalleled precision. By feeding the system with a vast dataset of images representing various crop diseases, it has learned to distinguish between healthy plants and those afflicted by diseases such as blight, rust, mold, and more. This capability enables farmers to swiftly identify and address disease outbreaks, thus minimizing crop losses and maximizing yields.

      Moreover, our system goes beyond disease detection to provide insights into soil health and composition. Through the analysis of soil images, it can categorize soil types based on their characteristics such as texture, color, and organic content. This information empowers farmers to make informed decisions regarding crop selection, irrigation, and fertilization strategies tailored to the specific needs of their soil, ultimately enhancing crop productivity and sustainability.

      The significance of our project extends far beyond individual farms. By leveraging the scalability of deep learning technology, our solution has the potential to contribute to global food security efforts by optimizing agricultural practices and mitigating the impact of crop diseases and soil degradation on a large scale.

      In summary, our project represents a significant advancement in the field of precision agriculture, offering a reliable and efficient tool for crop disease management and soil analysis. Through the integration of deep learning algorithms, we are paving the way for a more sustainable and productive future in agriculture.</p>
      </div>
   
    </div>
  )
}