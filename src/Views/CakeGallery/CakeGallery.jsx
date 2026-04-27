
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import cake1 from "../../assets/gallery1.webp";
import cake2 from "../../assets/gallery2.webp";
import cake3 from "../../assets/gallery3.webp";
import cake4 from "../../assets/gallery15.webp";
import cake5 from "../../assets/gallery5.webp";
import cake6 from "../../assets/gallery6.webp";
import cake7 from "../../assets/gallery7.webp";
import cake8 from "../../assets/gallery8.webp";
import cake9 from "../../assets/gallery9.webp";
import cake10 from "../../assets/gallery10.webp";
import cake11 from "../../assets/gallery11.webp";
import cake12 from "../../assets/gallery12.webp";

const cakesData = [
  { id: 1, name: "Fruit Cream Cake", price: 500, img: cake1 },
  { id: 2, name: "Vanilla Cream Cake", price: 600, img: cake2 },
  { id: 3, name: "Chocolate Jar", price: 550, img: cake3 },
  { id: 4, name: "Chocolate Pastry + Coffee", price: 700, img: cake4 },
  { id: 5, name: "Cupcake", price: 400, img: cake5 },
  { id: 6, name: "Chocolate Pastry", price: 100, img: cake6 },
  { id: 7, name: "Almond Cake", price: 450, img: cake7 },
  { id: 8, name: "Loaf Bread", price: 550, img: cake8 },
  { id: 9, name: "Chocolate Cookies", price: 500, img: cake9 },
  { id: 10, name: "Palmier", price: 800, img: cake10 },
  { id: 11, name: "Jam Cookies", price: 750, img: cake11 },
  { id: 12, name: "Donut", price: 650, img: cake12 }
];

function CakeGallery() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = cakesData.filter((cake) =>
    cake.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOrderNow = (cake) => {
    const newItem = {
      id: cake.id,
      name: cake.name,
      price: cake.price,
      qty: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === cake.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // ✅ Pass item also through navigation
    navigate("/order", { state: { item: newItem } });
  };

  return (
    <div>
      <Navbar active="gallery" />

      <div className="gallery">
        <h1 style={{ textAlign: "center" }}>Search your cravings 🍰</h1>

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cake-container">
          {filtered.map((cake) => (
            <div key={cake.id} className="cake-card">
              <img src={cake.img} alt={cake.name} />
              <h3>{cake.name}</h3>
              <p>₹{cake.price}</p>

              <button onClick={() => handleOrderNow(cake)}>
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CakeGallery;