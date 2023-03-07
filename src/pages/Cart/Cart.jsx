import React, { useContext } from 'react';
import { deleteCart } from '../../components/LocalStorage/LocalStorage';
import './styles.scss';
import { CartContext } from '../../context/CartContext/CartContext';
import { Button } from '../../components/Button/Button';
import Purchase from '../../components/Purchase/Purchase';

const Cart = () => {
  const { cartItems, getTotalPrice, cleanCart, purchaseFlag, setPurchaseFlag, updateCartCount, removeFromCart } = useContext(CartContext);
  const cartItemMap = new Map();
  
  cartItems.forEach((cartItem) => {
    const key = cartItem.book.id;
    const count = cartItem.count;
    if (cartItemMap.has(key)) {
      const existingCartItem = cartItemMap.get(key);
      cartItemMap.set(key, { book: cartItem.book, count: existingCartItem.count + count });
    } else {
      cartItemMap.set(key, cartItem);
    }
  });
  
  const cartItemsArray = Array.from(cartItemMap.values());

  const handlePurchaseClick = () => {
    setPurchaseFlag(true);
    cleanCart();
  };

  const handleCartItemQuantityChange = (bookId, newQuantity) => {
    updateCartCount(bookId, newQuantity);
  }

  const handleCartItemDelete = (bookId) => {
    removeFromCart(bookId);
  }
  return (
    <div className='cart'>
      <div className='cart_header'>
        <Button className='cart_button' disabled={cartItemsArray.length === 0} onClick={handlePurchaseClick}>Purchase</Button>
      </div>
      {cartItemsArray.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div className='cart_wrapper'>
          <div className='cart_content'>
            {cartItemsArray.map((cartItem) => {
              const { book, count } = cartItem;
              const pricePerUnit = book.price / count;

              return (
                <Purchase book={book} count={count} price={pricePerUnit} onCountChange={(newCount) =>
                  handleCartItemQuantityChange(cartItem.book.id, newCount)
                } onClick={() => handleCartItemDelete(cartItem.book.id)}/>
              );
            })}
          </div>
          <div className='cart_footer'>
            <p className='cart_total-price'>
              <span className='title'>Total price:</span>
              <span>{getTotalPrice()}$</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
