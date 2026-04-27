import React, { useState, useEffect } from "react";
import "./Order.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

const menuItems = [
  { id: 1, name: "🍫 Chocolate Cake", price: 500 },
  { id: 2, name: "🍰 Butterscotch Cake", price: 550 },
  { id: 3, name: "❤️ Red Velvet Cake", price: 650 },
  { id: 4, name: "🧁 Vanilla Cupcake", price: 120 },
  { id: 5, name: "🍓 Strawberry Pastry", price: 150 },
  { id: 6, name: "🍫 Chocolate Cupcake", price: 130 },
  { id: 7, name: "🥐 Croissant", price: 80 },
  { id: 8, name: "🍞 Danish Pastry", price: 140 },
  { id: 9, name: "🧁 Muffin", price: 90 },
  { id: 10, name: "🍫 Brownie", price: 180 },
  { id: 11, name: "🍪 Chocolate Chip Cookies", price: 100 },
  { id: 12, name: "🍪 Butter Cookies", price: 120 },
  { id: 13, name: "🍮 Dessert", price: 200 },
  { id: 14, name: "🥭 Mango Cake", price: 600 },
  { id: 15, name: "☕ Coffee", price: 90 },
  { id: 16, name: "🥤 Cold Coffee", price: 120 },
  { id: 17, name: "🎁 Gift Hamper", price: 1200 },
];

function Order() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // 🔥 NEW: Custom Order State
  const [customOrder, setCustomOrder] = useState({
    customerName: "",
    phone: "",
    details: "",
    date: "",
  });

  // Load cart
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((i) => i.id === item.id);

      if (index !== -1) {
        const updated = [...prevCart];
        updated[index].qty += 1;
        return updated;
      }

      return [...prevCart, { ...item, qty: 1 }];
    });
  };

  // Remove
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update qty
  const updateQty = (id, qty) => {
    const value = Number(qty);
    if (value <= 0) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: value } : item
      )
    );
  };

  // Total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Normal order
  const placeOrder = () => {
    if (!name) return alert("Enter your name");
    if (cart.length === 0) return alert("Cart is empty");

    alert("Order placed successfully 🎉");
    setCart([]);
    setOrderPlaced(true);
    localStorage.removeItem("cart");
  };

  // 🔥 Handle Custom Input
  const handleCustomChange = (e) => {
    setCustomOrder({
      ...customOrder,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Submit Custom Order
  const submitCustomOrder = () => {
    const { customerName, phone, details, date } = customOrder;

    if (!customerName || !phone || !details || !date) {
      alert("Please fill all custom order details!");
      return;
    }

    localStorage.setItem("customOrder", JSON.stringify(customOrder));

    alert("Custom order request sent! 🎂");
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
        <h1 className="order-title">🍰 Sweet Crumbs Bakery</h1>

        {/* MENU */}
        <div className="menu">
          <h2>Our Delicious Menu</h2>
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
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={placeOrder}>Order Now</button>

          {orderPlaced && (
            <p className="success">Order placed successfully 🎉</p>
          )}
        </div>

        {/* 🔥 NEW SECTION: CUSTOM ORDER */}
        <div className="custom-order">
          <h2>🎂 Custom Order</h2>

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
            placeholder="Describe your custom order (theme, flavor, message, size...)"
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