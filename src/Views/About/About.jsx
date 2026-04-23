import { useState } from "react";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./About.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

const AboutData = [
  {
    id: 1,
    title: "🥐 Who We Are",
    description: "We are a bakery shop offering fresh pastries and bread every day."
  },
  {
    id: 2,
    title: "🍰 Our Collection",
    description: "We offer cakes, croissants, muffins, tarts and baked treats for every occasion."
  },
  {
    id: 3,
    title: "🍞 Our Mission",
    description: "Our mission is to bring warm, delicious bakery flavors to your table."
  },
  {
    id: 4,
    title: "🚚 Fast Delivery",
    description: "We ensure quick and safe delivery so your fresh bakery items arrive on time."
  }
  
];

function About() {

  const IMAGES = [
    {
      url: "src/assets/cake4.webp",
      title: "Delicious Cake"
    },
    {
      url: "src/assets/cake6.webp",
      title: "Fresh Pastry"
    },
    {
      url: "src/assets/gallery9.webp",
      title: "Tasty Cookies"
    },
    {
      url: "src/assets/gallery8.webp",
      title: "Soft Bread"
    },
    {
      url: "src/assets/gallery5.webp",
      title: "Creamy Cupcakes"
    },
    {
      url: "src/assets/gallery17.jpg",
      title: "Sweet Dounts"
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(IMAGES.length - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < IMAGES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  

  const reviews = [
  {
    id: 1,
    name: "Priya",
    text: "Best cakes ever! Fresh and delicious 😍",
  },
  {
    id: 2,
    name: "Rahul",
    text: "Amazing service and fast delivery!",
  },
  {
    id: 3,
    name: "Reva",
    text: "Loved the pastries. Highly recommended!",
  },
];

  return (
    <div className="about">
      <Navbar active="about" />

      <BodyContainer>
        <h1 className="about-title">About Bakery Shop</h1>
        <p className="about-subtitle">
          <i>A warm bakery creating cakes, pastries and bread for every celebration.</i>
        </p>

        <div className="about-hero">
          <p>
            <i>
              From custom celebration cakes to freshly baked croissants and artisan bread,
              we handcraft every item with love, flavor and a touch of sweet magic.
            </i>
          </p>
        </div>

        <div className="gallery-container">
          <span className="btn-slide" onClick={slideLeft}>
            &lt;
          </span>

          <img
            src={IMAGES[currentIndex].url}
            className="main-image"
            alt="gallery"
          />

          <span className="btn-slide" onClick={slideRight}>
            &gt;
          </span>
        </div>

        <h3 className="gallery-title">
          {IMAGES[currentIndex].title}
        </h3>

        <div className="gallery-preview">
          {IMAGES.map((img, index) => (
            <img
              key={index}
              src={img.url}
              className="preview-img"
              onClick={() => setCurrentIndex(index)}
              alt="preview"
            />
          ))}
        </div>

        <div className="about-container">
          {AboutData.map((item) => (
            <div key={item.id} className="about-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="reviews-section">
  <h2>Customer Reviews</h2>

  <div className="reviews-container">
    {reviews.map((review) => (
      <div key={review.id} className="review-card">
        <p className="review-text">"{review.text}"</p>
        <h4 className="review-name">- {review.name}</h4>
      </div>
    ))}
  </div>
</div>

      </BodyContainer>

      <Footer />
    </div>
  );
}



export default About;