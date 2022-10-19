import React from 'react'
import Arrivals from './Arrivals'
import Banner from './Banner'
import Feature from './Feature'
import Products from './Products'
import Subscribe from './Subscribe'

const Home = () => {
  return (
    <>
    <Banner/>
    <Feature/>
    <Arrivals/>
    <Products/>
    <Subscribe/>
    <div>
      <h1 className='text-center font-bold text-lg'>this is product page</h1>
      
    </div>
    </>
  )
}

export default Home