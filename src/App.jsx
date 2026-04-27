import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Views/Home/Home.jsx";
import About from "./Views/About/About.jsx";
import OurService from "./Views/OurService/OurService.jsx";
import Contact from "./Views/Contact/Contact.jsx";
import CakeGallery from "./Views/CakeGallery/CakeGallery.jsx";
import NotFound from "./Views/NotFound/NotFound.jsx";
import Order from "./Views/Order/Order"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourservice" element={<OurService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<CakeGallery />} />
        <Route path="/order" element={<Order />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;