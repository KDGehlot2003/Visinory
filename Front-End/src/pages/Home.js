import React  from "react";
import { IoMdQrScanner } from "react-icons/io";
import { NavLink } from "react-router-dom";


export default function Home() {
    return (
        <>
        <div className="hero" >
            <img className="imge" src='/images/homeimg.png' alt="farmer"/>
          <div className="hero-sep">
            <div className="hero-dis">
           <h6>Welcome to AgroVision Framing</h6>
           <h1>Empowering Agriculture, </h1>
           <h1>One Insight at a Time. </h1>
           <p> your agricultural ally in the digital age. AgroVision harnesses the power of predictive analytics and sensor technology to revolutionize farming practices. From monitoring soil moisture levels to detecting plant diseases early. </p>
           <div className="hero-btn">
            <NavLink to="/services">
           <button > <IoMdQrScanner alt="scan" />  <span>Scan </span> </button>
           </NavLink>
           <NavLink to="/about">
           <button>Learn More</button>
           </NavLink>
           </div>
            </div>
            </div>
            <div className="hero-feature">
            <div className="feat">
            <h3>Prediction and Detection</h3>
            <p>Stay Ahead of Crop Threats with AgroVision Disease Detection.</p>
             <img src="/images/img1.png" alt="crops" />
             </div>
             <div className="feat">
            <h3>Blog</h3>
            <p>Stay Ahead of Crop Threats with AgroVision articles.</p>
             <img src="/images/img3.png" alt="soil type" />
             </div>
             <div className="feat">
            <h3>Hydroponics Tower</h3>
            <p>Smart Watering, Stronger Harvests: AgroVision Adaptive Irrigation.</p>
             <img src="/images/img2.png" alt="soil" />
             </div>
            </div>
            </div>
         <div>

         </div>
         <div className="comp">
            <div className="headline">
              <h1 className="home-head">Our Features</h1>
            <p>Problems trying to resolve the conflict between 
              the two major realms of Crop & Soil Detection and smart farming.</p>
              <NavLink to="/about">
              <h4>Learn more </h4>
              </NavLink>
            </div>
             <div className="home-comp">
              <NavLink to="/crop">
              <div className="comp-card">
                   <img src="/images/tree.jpg" alt="soil" />
                   <h2>Plant prediction & detection</h2>
                   <p>Upload image to detect the plant disease.  </p>
               </div>
               </NavLink>
            
               <div className="comp-card">
                    <img src="/images/areo.jpg" alt="soil" />
                    <h2>Hydroponics Tower</h2>
                    <p>Smart Agriculture methods to grow crops and plants</p>
               </div>
              
            </div>
            <NavLink to="/soil">
            <div  className="idk">
                  <img src="/images/idk1.jpg" alt="soil" />
                   <h2>Soil prediction & detection</h2>
                   <p>Upload image of soil to detect the which plant to grow  </p>
                </div>
                </NavLink>
         </div>
         <div className="news-head"> 
            <h4>From the blogs</h4>
            <h2>News and Articles</h2>
         </div>
        <div className="news-comp">                 
          <div className="news-card">
            <img src="/images/bone.png" alt="soil" />
            <div>05 March 2024</div>
            <h3>Bringing Food Production Back To Cities  </h3>
          </div>
          <div className="news-card">
            <img src="/images/btwo.png" alt="soil" />
            <div>04 March 2024</div>
            <h3>The Future of Farming, Smart Irrigation Solution </h3>
            </div>
          <div className="news-card">
          <img src="/images/bthree.png" alt="soil" />
          <div>03 March 2024</div>
            <h3>Agronomy and relation to Other Sciences. </h3>
          </div>
          <NavLink to="/blog">
          <div className="news-read-more">
            <img src="/images/arrow.jpg"  alt="arrow" />
          <h3>Read More</h3>
          </div>
          </NavLink>
        </div>
           
            </>
       
       
    );
}