import React from 'react'

const Product = () => {
  return (
    <div >
    
         <a href="https://www.kindacode.com"
            class="card flex flex-col pt-8 bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src="assets/Images/p1.png" alt="Fiction Product"
                class="ml-32 w-36 h-34 object-cover rounded-tl-md rounded-tr-md"/>

            <div class="px-3 ml-8  p-8 flex ">
                <h1 class="font-bold text-xl ml-6 mr-4">Product Two</h1>
                <p class="text-sm ml-14 text-xl">$69.69</p>
               
            </div>
        </a>
       
        <button className='ml-40 pb-8 font-bold mt-4 btn'>ADD TO CART</button>
    </div>
  )
}

export default Product