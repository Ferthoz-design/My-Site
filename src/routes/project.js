import React from 'react';
import Navbar from '../component/Navbar';
import MainImg2 from '../component/MainImg2';
import Workcard from "../component/Workcard"
import Pricingcard from '../component/Pricingcard';
import Footer from '../component/Footer';


const project = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="PROJECTS." text="My Most Recent Works"/>
      <Workcard/>
      <Pricingcard/>
      <Footer/>
    </div>
  )
}

export default project;
