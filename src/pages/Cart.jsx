import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../components/Cartitem';
import RazorpayPayment from '../components/RazorpayPayment';

const Cart = () => {
  const { getCartProducts } = useCart();
  const products = getCartProducts();

  // Calculate total price
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h2>Your cart is empty</h2>
        <Link to="/" className="mt-4 text-blue-500 hover:underline">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center my-10 gap-5">
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      
      <div className="w-full flex justify-center items-center mt-5 p-4 border-t border-gray-300">
        <h3 className="text-lg font-semibold">Total Price:</h3>
        <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p> 
      </div>
      <RazorpayPayment price={totalPrice}/>
      
 
    </div>
  );
};

export default Cart;
