import * as React from "react";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About";
import Cart from "./Cart";
function App() {
  return (
    <>
      
      <Navbar/>
      <BrowserRouter>
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  );
}
export default App