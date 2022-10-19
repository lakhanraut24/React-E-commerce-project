import React, { useEffect, useState } from "react";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const fetchProducts = async ()  =>{
    //   const res = await fetch('https://fakestoreapi.com/products')
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())

      .then((products) => setProducts(products));
    console.log(products);
  }, []);

  return (
    <>
       <div className="productsWrapper ">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img className="img ml-24" src={product.image} alt="" />
                    <h4 className="font-bold mb-4">{product.title}</h4>
                    <h5 className="font-bold mb-4">{product.price}$</h5>
                    <button  className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    </>
  );
};

export default Products;
