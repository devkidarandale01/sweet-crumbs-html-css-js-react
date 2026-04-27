import React, { useState, useEffect } from "react";
import "./Order.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

// Menu Data
const menuItems = [
  { id: 1, name: "Chocolate Cake", price: 500 },
  { id: 2, name: "Vanilla Cupcake", price: 120 },
  { id: 3, name: "Strawberry Pastry", price: 150 },
  { id: 4, name: "Croissant", price: 80 },
  { id: 5, name: "Donut", price: 100 },
];

function Order() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item
  const addToCart = (item) => {
    const exists = cart.find((i) => i.id === item.id);

    if (exists) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQty = (id, qty) => {
    if (qty <= 0) return;

    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: Number(qty) } : item
      )
    );
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Place order
  const placeOrder = () => {
    if (!name) {
      alert("Please enter your name!");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    alert("Order placed successfully! 🎉");
    setOrderPlaced(true);
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="order">
      {/* NAVBAR */}
      <Navbar active="order" />

      {/* BODY */}
      <BodyContainer>
        <h1 className="order-title">🍰 Bakery Order Page</h1>

        {/* MENU */}
        <div className="menu">
          <h2>Menu</h2>
          <div className="menu-items">
            {menuItems.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CART */}
        <div className="cart">
          <h2>Your Cart 🛒</h2>

          {cart.length === 0 ? (
            <p>No items added</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>

                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) =>
                    updateQty(item.id, e.target.value)
                  }
                />

                <span>₹{item.price * item.qty}</span>

                <button onClick={() => removeFromCart(item.id)}>
                  ❌
                </button>
              </div>
            ))
          )}

          <h3>Total: ₹{total}</h3>
        </div>

        {/* ORDER FORM */}
        <div className="order-form">
          <h2>Place Order</h2>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={placeOrder}>Order Now</button>

          {orderPlaced && (
            <p className="success">
              Thank you for your order! 🍞
            </p>
          )}
        </div>
      </BodyContainer>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Order;