import "./CakeGallery.css";
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
  { id: 1, name: "Fruit Cream Cake", price: "₹500", desc: "Fresh fruit topped soft cake",  bestseller: true, img: cake1 },
  { id: 2, name: "Vanilla cream cake", price: "₹500", desc: "Vanilla cream cake",  img: cake2 },
  { id: 3, name: "Chocolate Jar", price: "₹550", desc: "Layered chocolate dessert jar",  bestseller: true, img: cake3 },
  { id: 4, name: "Chocolate Pastry + Coffee", price: "₹700", desc: "  Rich chocolate pastry served with hot coffee .",  img: cake4 },
  { id: 5, name: "Cupcake", price: "₹400", desc: "Soft cupcake with cream topping",  img: cake5 },
  { id: 6, name: "Chocolate Pastry", price: "₹100", desc: "Rich chocolate layered pastry", bestseller: true, img: cake6 },
  { id: 7, name: "Almond Cake", price: "₹450", desc: "Cake with crunchy almond flakes", img: cake7 },
  { id: 8, name: "Loaf Bread", price: "₹550", desc: "Fresh soft baked bread loaf",  img: cake8 },
  { id: 9, name: "Chocolate Cookies", price: "₹500", desc: "Crunchy chocolate cookies",  img: cake9 },
  { id: 10, name: "Palmier", price: "₹800", desc: "Crispy puff pastry",  img: cake10 },
  { id: 11, name: "Jam Cookies", price: "₹750", desc: "Cookies filled with sweet jam", img: cake11 },
  { id: 12, name: "Donut", price: "₹650", desc: "Soft donut with sprinkles",  img: cake12 }
];

function CakeGallery() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filtered = cakesData.filter((cake) =>
    cake.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar active="gallery" />

      <div className="gallery">
       <center><h1><i>Search your caravings here!g</i></h1></center>
     
<center><input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        /></center>
        

        <div className="cake-container">
          {filtered.map((cake) => (
            <div key={cake.id} className="cake-card">


              <img src={cake.img} alt={cake.name} />

              <h3>{cake.name}</h3>
              <p>{cake.price}</p>

              
              <p className="desc">{cake.desc}</p>



              
              <span
                className="fav-btn"
                onClick={() => toggleFav(cake.id)}
              >
                {favorites.includes(cake.id) ? "♥️ " : " ♡"}
              </span>

              <button onClick={() => navigate("/order")}>
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