import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">


                <div className="footer-col">

                    <div className="logo-box">
                        <img src={logo} alt="logo" className="logo-img" />
                        <div>
                            <h2>SWEET-CRUMBS</h2>
                            <h4>Bakery</h4>
                        </div>
                    </div>

                    <p>
                        Life is better with a little sugar & spice.
                        From our oven straight to your heart,
                        A sweet little joy in every part.
                    </p>
                </div>


                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/Cakegallery">CakeGallery</a></li>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/ourservice">OurService</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact</h3>
                    <p><a href="tel:+8788989941" class="menu-subitem">📞+91 8788989941</a></p>
                    <p><a href="mailto:sweetcrumbs.com" class="menu-subitem">
                        📩sweetcrumbs.com</a></p>
                    <p>📍Pune, India</p>
                </div>

                <div className="footer-col">
                    <h3>Features</h3>
                    <ul>
                        <li>Freshly Baked Daily</li>
                        <li>100% Eggless Options</li>
                        <li>Customized Party Cakes</li>
                        <li>Premium Ingredients</li>
                        <li>Trusted by 5k+ Foodies</li>
                    </ul>
                </div>

            </div>

            <div className="social-icons">
                <a href="https://www.instagram.com/sweetcrumbsbakery/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/sweetcrumbsbakery/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://wa.me/918788989941" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </div>

            <p className="copyright">
                © 2026 Sweet Crumbs Bakery
            </p>

        </footer>
    );
}

export default Footer;