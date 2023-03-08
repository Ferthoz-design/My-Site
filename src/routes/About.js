import React from 'react';
import Navbar from '../component/Navbar';
import MainImg2 from '../component/MainImg2';
import AboutContent from"../component/AboutContent";
import Footer from '../component/Footer';

const About = () => {
  return (
    <div>
     <Navbar/>
     <MainImg2 heading="ABOUT" text="I am a friendly frontend developer"/>
     <AboutContent/>
     <Footer/>
    </div>
  )
}

export default About;
