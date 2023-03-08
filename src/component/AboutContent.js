import "../component/AboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import AboutImg from "../Assets/AboutImg.webp";
import AboutImg2 from "../Assets/AboutImg2.webp";

const AboutContent = () => {
    return (
        <div className="About">
            <div className="left">
                <h1>ABOUT ME</h1>
                <p>Hi Im Ferthoz ,Im a frontend developer</p>
                <Link to="./contact"><button className="btn-Ab">Contact</button></Link>
            </div>
            <div className="Right">
                <div className="Img-cont">
                    <div className="img-stock-top">
                        <img src={AboutImg} className="img1" alt="true" />
                    </div>
                    <div className="img-stock-bottom">
                        <img src={AboutImg2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
