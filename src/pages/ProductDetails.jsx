import React from 'react';
import { useParams } from 'react-router-dom'; 
import { useCart } from '../context/CartContext';
import RazorpayPayment from '../components/RazorpayPayment';

const ProductDetails = () => {
  const { cartItems, addToCart, removeFromCart, products } = useCart();
  
 
  const { productId } = useParams();
  
  const product = products.find(item => item.id === parseInt(productId)); // Find the specific product by ID

  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }

  const isInCart = cartItems.includes(product.id);



  const handleCartToggle = () => {
    if (isInCart) {
      removeFromCart(product.id); // Remove from cart
    } else {
      addToCart(product.id); // Add to cart
    }
  };
  

  return (
  <div className="max-w-lg mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold">Price: ${product.price}</p>
      <p className="text-gray-600">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
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

export default ProductDetails;
