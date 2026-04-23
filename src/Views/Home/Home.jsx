import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import "./Home.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import React, { useState } from 'react'; 

import Cake1 from "../../assets/cake1.webp";
import Cake2 from "../../assets/cake2.webp";
import Cake3 from "../../assets/cake3.webp";
import Cake4 from "../../assets/cake4.webp";
import Cake5 from "../../assets/cake5.webp";
import Cake6 from "../../assets/cake6.webp";
import Cake7 from "../../assets/cake7.webp";
import Cake8 from "../../assets/cake8.webp";
import Cake9 from "../../assets/cake9.webp";

const Products = [
  {
    id: 1,
    title: "Brownies",
    image: Cake1
  },
  {
    id: 2,
    title: "Croissant, Danishes & Muffins",
    image: Cake2
  },
  {
    id: 3,
    title: "Desserts & Cupcakes",
    image: Cake3
  },
  {
    id: 4,
    title: "Butterscotch Cake",
    image: Cake4
  },
  {
    id: 5,
    title: "Cup Cake",
    image: Cake5
  },

  {
    id: 6,
    title: "Red-Velvet",
    image: Cake6
  },

  {
    id: 7,
    title: "Beverage",
    image: Cake7
  },

  {
    id: 8,
    title: "Mango Specials",
    image: Cake8
  },

  {
    id: 9,
    title: "Gifting",
    image: Cake9
  },
];

function Home() {

  // --- HA NAVIN CODE ITHE TAKA ---
  const GALLERY_IMAGES = [
    "./src/assets/quote0.jpg",
    "./src/assets/quote1.jpg",
    "./src/assets/quote2.jpg",
    "./src/assets/quote3.jpg",
    "./src/assets/quote4.jpg",
    "./src/assets/quote5.jpg",
    "./src/assets/quote6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };
  // ------------------------------

 
  return (
    <div className="home">
      <Navbar active="home" />

      <BodyContainer>
        <div className="hero-section">
          <h1 className="home-title">Welcome to SWEET-CRUMBS Bakery</h1>
          <p className="home-subtitle"><i>Fresh bakery treats made daily just for you</i></p>
        </div>
      </BodyContainer>

      <BodyContainer >
        <div className="product-container">

          {Products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="card-content">
                <center> <h3>{product.title}</h3></center>
              </div>
            </div>
          ))}
        </div>
      </BodyContainer>


      <BodyContainer>
        <div className="quote-gallery-wrapper" style={{ padding: "40px 0", textAlign: "center" }}>
          <h2 style={{ color: "#b5582d", marginBottom: "20px" }}>Special Moments</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            
            <button className="nav-btn" onClick={slideLeft} style={{ cursor: "pointer", fontSize: "24px", background: "none", border: "none" }}>❮</button>
            
            <div className="gallery-frame" style={{ width: "500px", height: "350px", overflow: "hidden", borderRadius: "15px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}>
              <img 
                src={GALLERY_IMAGES[currentIndex]} 
                alt="Gallery" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>

            <button className="nav-btn" onClick={slideRight} style={{ cursor: "pointer", fontSize: "24px", background: "none", border: "none" }}>❯</button>
            
          </div>
        </div>
      </BodyContainer>

  

      <Footer />
    </div>
  );
}

export default Home;