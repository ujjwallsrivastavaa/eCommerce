import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json());


export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [products,setProducts] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prevItemsId) => [...prevItemsId, itemId]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItemsId) => prevItemsId.filter(id => id !== itemId));
  };

  const getCartProducts = () => {
    return cartItems.map(itemId => products.find(product => product.id === itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,products,setProducts,getCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};
