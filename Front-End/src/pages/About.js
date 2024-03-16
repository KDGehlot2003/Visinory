import React from "react"
import { NavLink } from "react-router-dom"


export default function About() {
    return (
        <>
        <div className="hero" >
            <img className="imge" src='/images/homeimg.png' alt="farmer"/>
          <div className="hero-sep">
            <div className="hero-dis">
           <h1>Welcome to Visionary:</h1>
           <h1>"Empowering Agriculture Through Innovation" </h1>
           <p> "At Visionary, our mission is to revolutionize agriculture through cutting-edge technology and knowledge sharing. We're committed to empowering farmers and enthusiasts alike with tools and resources for sustainable farming practices."</p>
           <div className="hellno"></div>
            </div>
            </div>
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
            )
}