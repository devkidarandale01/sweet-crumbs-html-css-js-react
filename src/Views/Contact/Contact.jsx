import React, { useState, useEffect } from "react";
import "./Contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
      setForm(JSON.parse(savedData));
    }

    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning ☀️");
    else if (hour < 18) setGreeting("Good Afternoon 🌤️");
    else setGreeting("Good Evening 🌙");
  }, []);


  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(form));
  }, [form]);

  const contactInfo = [
    { title: "Shop", value: "Sweet Crumbs Bakery " },
    {
      title: "Address",
      value:
        "Sweet Crumbs Bakery, Shop No. 12, MG Road, Pimpri-Chinchwad, Pune, Maharashtra - 411017",
    },
    {
      title: "Phone",
      value: "7499637769",
      link: "tel:7499637769",
    },
    {
      title: "Email",
      value: "sweetcrumbs@gmail.com",
      link: "mailto:sweetcrumbs@gmail.com",
    },
    {
      title: "Best for",
      value:
        "Custom cakes, party orders, fresh bakery boxes and same-day delivery.",
    },
    { title: "Opening Hours", value: "Mon-Sun: 8:00 AM – 8:00 PM" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      return "Please fill all fields!";
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(form.email)) {
      return "Invalid email format!";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();

    if (error) {
      setStatus(error);
      alert(error); 
    } else {
      setStatus("Message sent successfully! 🧁");
      alert("Thank you! Your message has been sent.");

      
      setForm({ name: "", email: "", message: "" });
      localStorage.removeItem("contactForm");
    }
  };

  return (
    <div className="contact">
      <Navbar active="contact" />

      <BodyContainer>
        <h1 className="contact-title">Contact Sweet Crumbs Bakery</h1>
        <p className="contact-subtitle">
          {greeting}! We bake fresh treats every day 🍰
        </p>

        <div className="contact-container">

          <div className="contact-card">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <h3>{item.title}</h3>

                {item.link ? (
                  <p>
                    <a href={item.link} className="contact-link">
                      {item.value}
                    </a>
                  </p>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            ))}
          </div>

      
          <div className="contact-form-card">
            <h2>Send us a Message 💌</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
              />

              <button type="submit">Send Message</button>
            </form>

            {status && (
              <p
                className={
                  status.includes("successfully") ? "success" : "error"
                }
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Contact;