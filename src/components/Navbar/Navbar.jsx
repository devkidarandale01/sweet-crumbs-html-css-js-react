import "./Navbar.css";
import { Link } from "react-router-dom";
import { House, FileUser, Phone, HeartHandshake, Cake, ListOrdered } from "lucide-react";

function Navbar({ active }) {
  return (
    <div className="navbar">
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