import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Order.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

function Order() {
  const location = useLocation();

  const [cart, setCart] = useState([]);


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [orderPlaced, setOrderPlaced] = useState(false);

 
  useEffect(() => {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (location.state?.item) {
      const newItem = location.state.item;

      const existing = storedCart.find((i) => i.id === newItem.id);

      if (existing) {
        existing.qty += 1;
      } else {
        storedCart.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(storedCart));
    }

    setCart(storedCart);
  }, [location.state]);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };


  const updateQty = (id, qty) => {
    const value = Number(qty);
    if (value <= 0) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: value } : item
      )
    );
  };


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );


  const placeOrder = () => {
    if (!name) return alert("Enter your name");
    if (!phone) return alert("Enter your contact number");
    if (!address) return alert("Enter your address");
    if (cart.length === 0) return alert("Cart is empty");

    const orderData = {
      name,
      phone,
      address,
      cart,
      total,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderData));

    alert("Order placed successfully 🎉");

    setCart([]);
    localStorage.removeItem("cart");

    setName("");
    setPhone("");
    setAddress("");

    setOrderPlaced(true);
  };

 
  const [customOrder, setCustomOrder] = useState({
    customerName: "",
    phone: "",
    details: "",
    date: "",
  });

  const handleCustomChange = (e) => {
    setCustomOrder({
      ...customOrder,
      [e.target.name]: e.target.value,
    });
  };

  const submitCustomOrder = () => {
    const { customerName, phone, details, date } = customOrder;

    if (!customerName || !phone || !details || !date) {
      alert("Fill all custom order details");
      return;
    }

    localStorage.setItem("customOrder", JSON.stringify(customOrder));

    alert("Custom order submitted 🎂");

    setCustomOrder({
      customerName: "",
      phone: "",
      details: "",
      date: "",
    });
  };

  return (
    <div className="order">
      <Navbar active="order" />

      <BodyContainer>
        <h1 className="order-title">Your Order</h1>

     
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

   
        <div className="order-form">
          <h2>Delivery Details</h2>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Enter delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button onClick={placeOrder}>Place Order</button>

          {orderPlaced && (
            <p className="success">Order placed successfully 🎉</p>
          )}
        </div>

      
        <div className="custom-order">
          <h2>🎂 Custom Cake Request</h2>

          <input
            type="text"
            name="customerName"
            placeholder="Your Name"
            value={customOrder.customerName}
            onChange={handleCustomChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={customOrder.phone}
            onChange={handleCustomChange}
          />

          <textarea
            name="details"
            placeholder="Describe your custom cake..."
            value={customOrder.details}
            onChange={handleCustomChange}
          />

          <input
            type="date"
            name="date"
            value={customOrder.date}
            onChange={handleCustomChange}
          />

          <button onClick={submitCustomOrder}>
            Submit Custom Order
          </button>
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Order;

