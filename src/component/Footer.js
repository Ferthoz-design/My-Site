import "./FooterStyle.css";
import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#000", marginleft: "1rem" }} />
                        <div className="location-para">
                            <p>789 Blousing house</p>
                            <p>Chennai</p>
                        </div>
                    </div>
                    <div className="Phone">
                        <h4><FaPhone size={20} style={{ color: "#000", marginRight: "1rem" }} />+987654329</h4>
                    </div>

                    <div className="Email">
                        <h4> <FaMailBulk size={20} style={{ color: "#000", marginRight: "1rem" }} />Safrin1906@gmail.com</h4>
                    </div>
                </div>

                <div className="footer-right">
                    <h3>About the company</h3>
                    <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                    <div className="Social">
                        <FaFacebook size={20} style={{ color: "#000", marginRight: "2rem" }} />
                        <FaTwitter size={20} style={{ color: "#000", marginRight: "2rem" }} />
                        <FaLinkedin size={20} style={{ color: "#000", marginRight: "2rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
