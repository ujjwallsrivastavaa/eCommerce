import React from 'react';
import { FaShopify, FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl flex items-center">
          <FaShopify className="mr-2" />
          Ecommerce
        </NavLink>
        
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className="text-white hover:text-gray-300 transition duration-200 flex items-center"
          >
            <FaShoppingCart className="mr-1" />
            Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
