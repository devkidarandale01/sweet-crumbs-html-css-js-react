import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import "./Home.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

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
  return (
    <div className="home">
      <Navbar active="home" />

      <BodyContainer>
        <div className="hero-section">
          <h1 className="home-title">Welcome to Bakery Shop</h1>
          <p className="home-subtitle"><i>Fresh bakery treats made daily just for you.</i></p>
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

      <Footer />
    </div>
  );
}

export default Home;