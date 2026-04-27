import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LOGO */}
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

        {/* QUICK LINKS (FIXED) */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cakegallery">Cake Gallery</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/ourservice">Our Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>

        {/* CONTACT (FIXED className) */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>
            <a href="tel:+918788989941" className="menu-subitem">
              📞 +91 8788989941
            </a>
          </p>
          <p>
            <a href="mailto:sweetcrumbs@gmail.com" className="menu-subitem">
              📩 sweetcrumbs@gmail.com
            </a>
          </p>
          <p>📍 Pune, India</p>
        </div>

        {/* FEATURES */}
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

      {/* SOCIAL ICONS */}
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