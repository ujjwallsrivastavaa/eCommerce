import React from 'react';
import { useCart } from '../context/CartContext'; // Adjust the path to your useCart hook
import { Link } from 'react-router-dom';

const CartItem = ({ product }) => {
    const { removeFromCart } = useCart();

    const handleRemove = () => {
        removeFromCart(product.id); // Change `item` to `product`
    };

    return (
        <Link to={`/product/${product.id}`} className="relative p-4 pt-9 w-[20rem]  border-b border-gray-300 flex flex-col justify-between items-center">
            <button 
                onClick={handleRemove} 
                className="absolute top-1 right-1 text-3xl text-red-500 hover:text-red-700"
                aria-label="Remove item"
            >
                &times; {/* Button content for removal */}
            </button>
        
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-700">Price: ${product.price}</p>
            </div>
        </Link>
    );
};

export default CartItem;
