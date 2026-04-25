import "./Navbar.css";
import { Link } from "react-router-dom";
import { House, FileUser, Phone, HeartHandshake, Cake, ListOrdered } from "lucide-react";
import logo from "../../assets/logo.jpg";

function Navbar({ active }) {
  return (
    <div className="navbar">

    
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <h2 className="nav-title">Sweet Crumbs</h2>
      </div>

  
      <Link to="/" className={`menu-item ${active === "home" ? "active-menu" : ""}`}>
        <House className="menu-icon" /> Home
      </Link>

      <Link to="/about" className={`menu-item ${active === "about" ? "active-menu" : ""}`}>
        <FileUser className="menu-icon" /> About
      </Link>

      <Link to="/gallery" className={`menu-item ${active === "gallery" ? "active-menu" : ""}`}>
        <Cake className="menu-icon" /> CakeGallery
      </Link>

      <Link to="/order" className={`menu-item ${active === "order" ? "active-menu" : ""}`}>
        <ListOrdered className="menu-icon" /> Order
      </Link>

      <Link to="/ourservice" className={`menu-item ${active === "ourservice" ? "active-menu" : ""}`}>
        <HeartHandshake className="menu-icon" /> OurService
      </Link>
      
      <Link to="/contact" className={`menu-item ${active === "contact" ? "active-menu" : ""}`}>
        <Phone className="menu-icon" /> Contact
      </Link>

    </div>
  );
}

export default Navbar;