import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Cart";
import Contact from "./Components/Pages/Contact";
import Admin from "./Components/Pages/Admin";
import Products from "./Components/Products";
import About from "./Components/Pages/About";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
