import React from 'react';
import "../component/mainImgstyle.css";
import IntroImg from "../Assets/photo2.avif";
import { Link } from 'react-router-dom';


const MainImg = () => {
  return (
    <div className='hero-section'>
      <div className='mask'>
        <img className="Image" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi I'm a Freelancer</p>
        <h1>Frontend Developer</h1>
        <div> 
          <Link to="/project" className='btn1'>Projects</Link>
          <Link to="/contact" className='btn1'>contact</Link>
        </div>
      </div>

    </div>
  )
}

export default MainImg
