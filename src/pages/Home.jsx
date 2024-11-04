import React from 'react';

import Product from '../components/Product';

import { useCart } from '../context/CartContext';



const Home = () => {
  const {products} = useCart()
 
  return (
    <div className="flex flex-wrap justify-center my-10 gap-5">
    {products.map((product) => (
      
      <Product key={product.id} product={product}  />
    ))}
  </div>
  );
};

export default Home;
