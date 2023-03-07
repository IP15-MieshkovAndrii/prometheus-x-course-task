import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [purchaseFlag, setPurchaseFlag] = useState(false);

    
  const addToCart = (cartItem) => {
    setCartItems([...cartItems, cartItem]);
  };

  const cleanCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    setPurchaseFlag(false);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.book.id !== item.id));
  };

  const updateCartCount = (item, count) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.book.id === item.id ? { item, count } : cartItem
      )
    );
  };

  const getTotalItemsCount = () => {
    return cartItems.reduce((count, cartItem) => count + cartItem.count, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, cartItem) => {
        console.log(cartItem)
        if (cartItem && cartItem.item && cartItem.item.price) {
          return total + cartItem.item.price * cartItem.count;
        } else {
          return total;
        }
      },
      0
    );
  };

  const contextValues = {
    cartItems,
    cleanCart,
    addToCart,
    removeFromCart,
    updateCartCount,
    getTotalItemsCount,
    getTotalPrice,
    purchaseFlag,
    setPurchaseFlag,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
