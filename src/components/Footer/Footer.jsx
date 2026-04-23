import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">


                <div className="footer-section">
                    <h2 className="logo">SWEET-CRUMBS Bakery</h2>
                    <p>Life is better with a little sugar and spice From our oven straight to your heart, A sweet little joy in every part</p>
                </div>


                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/Cakegallery">CakeGallery</a>
                        <a href="/order">Order</a>
                        <a href="/ourservice">OurService</a>
                        <a href="/contact">Contact</a>
                    </ul>
                </div>


                <div className="footer-section">
                    <h3>Contact</h3>
                  
                    <p><a href="tel:+8788989941" class="menu-subitem">📞+91 8788989941</a></p>
                    <p><a href="mailto:sweetcrumbs.com" class="menu-subitem">
                        📩sweetcrumbs.com</a></p>
                    <p>📍Pune, India</p>
                   
                </div>


                <div className="footer-section">
                    <h3>Features</h3>
                    <ul>
                        <li>Freshly Baked Daily</li>&nbsp;&nbsp;
                        <li>100% Eggless Options</li>&nbsp;&nbsp;
                        <li>Customized Party Cakes</li>&nbsp;&nbsp;
                        <li>Premium Ingredients</li>&nbsp;&nbsp;
                        <li>Trusted by 5k+ Foodies</li>
                    </ul>

                </div>

            </div>
        </footer>
    );
}

export default Footer;