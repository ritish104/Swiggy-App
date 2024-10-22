import React, { createContext, useContext, useState } from "react";

// Create a Cart Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const value = { cartItems, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
