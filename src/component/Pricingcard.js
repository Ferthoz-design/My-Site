import "../component/Pricingcard.css";
import React from 'react';
import { Link } from "react-router-dom";

const Pricingcard = () => {
    return (
        <div className="Pricing">
            <div className="Card-cont">
                <div className="Card">
                    <h3>Basic</h3>
                    <span className="bar"></span>
                    <p className="card-heading">$ 100</p>
                    <p> -3 days-</p>
                    <p> -3 Pages -</p>
                    <p> - Featured -</p>
                    <p> Responsive Design </p>
                    <Link to="/contact" className="btn">Purchase Now</Link>
                </div>
                <div className="Card">
                    <h3>Premiem</h3>
                    <span className="bar"></span>
                    <p className="card-heading">$ 200</p>
                    <p> -2 days-</p>
                    <p> -2 Pages -</p>
                    <p> - Featured -</p>
                    <p> Responsive Design </p>
                    <Link to="/contact" className="btn">Purchase Now</Link>
                </div>
                <div className="Card">
                    <h3>Business</h3>
                    <span className="bar"></span>
                    <p className="card-heading">$ 300</p>
                    <p> -1 days-</p>
                    <p> -2 Pages -</p>
                    <p> - Featured -</p>
                    <p> Responsive Design </p>
                    <Link to="/contact" className="btn">Purchase Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricingcard;
