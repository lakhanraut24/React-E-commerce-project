import React from 'react'

const Product = (props) => {

  const {product} = props;
  return (
    <div >
    
         <a 
            className="card flex flex-col pt-8 bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src={product.image} alt="Fiction Product"
                className="img ml-32 w-36  object-cover rounded-tl-md rounded-tr-md"/>

            <div className="px-3 ml-8  p-8 flex ">
                <h1 className="font-bold text-xl ml-6 mr-4">{product.title}</h1>
                <p className="text-sm ml-14 text-xl">{product.price}rs</p>
               
            </div>
        </a>
       
        <button className='ml-40 pb-8 font-bold mt-4 btn'>ADD TO CART</button>
    </div>
  )
}

export default Product