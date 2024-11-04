import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { handlePayment } from '../utils/HandlePayment';
import RazorpayPayment from './RazorpayPayment';
const Product = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Check if the product is in the cart
  const isInCart = cartItems.includes(product.id);

  const handleCartToggle = () => {
    if (isInCart) {
      removeFromCart(product.id); // Remove from cart
    } else {
      addToCart(product.id); // Add to cart
    }
  };
  

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center w-[20rem] mx-2">
      <Link to={`/product/${product.id}`} className="flex-grow">
        <img className="h-48 w-auto object-cover mb-4" src={product.image} alt={product.title} />
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{product.description}</p>
        <p className="text-xl font-bold text-green-600 mb-4">${product.price}</p>
      </Link>
      <div className="flex justify-between w-full">
        <button
          onClick={handleCartToggle}
          className={`px-4 py-2 rounded-lg text-white transition duration-300 ${
            isInCart ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
            <RazorpayPayment price={product.price} />
      </div>
    </div>
  );
};

export default Product;
