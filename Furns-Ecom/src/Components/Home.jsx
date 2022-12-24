import React from "react";

import Banner from "./Pages/Banner";

import Products from "./Products";

const Home = () => {
  return (
    <>
      <Banner />

      <div>
        <h1 className="text-center text-5xl font-bold mb-16 mt-10 ">
          <span>Our</span> <u>pro</u>ducts
        </h1>
        <Products />
      </div>
    </>
  );
};

export default Home;
