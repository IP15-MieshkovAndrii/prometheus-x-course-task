import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import "./styles.scss";
import {CartContext} from "../../context/CartContext/CartContext"
import { Button } from '../../components/Button/Button';

import img from '../../images/imageNotFound.png'

const Book = ({books}) => {
  const { id } = useParams();
  const book = books.books.find((book) => book.id === parseInt(id));

  const [count, setCount] = useState(1);
  const [totalCost, setTotalCost] = useState('');

  const { addToCart } = useContext(CartContext);

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);



  const handleCountChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 42) {
      setCount(value);
    }
  };

  const incrementCount = () => {
    if (count < 42) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setTotalCost((count * book.price).toFixed(2));
  }, [count]);

  const handleAddToCart = () => {
    const cartItem = {
      book: book,
      count: count,
      totalCost: totalCost
    };
      addToCart(cartItem);
      setCart([...cart, cartItem]);
      localStorage.setItem('cart', JSON.stringify([...cart, cartItem]));

  };

  return (
      <div className="book">
        <div className="book_wrapper">
          <div className="book_img">
            <img src={book.image || img} alt="Book image" />
          </div>
          <div className="book_container">
            <div className="book_content">
              <h2 className="book_title">{book.title }</h2>
              <h3 className="book_author">{book.author}</h3>
              <h4 className="book_level">Book level</h4>
              <ul className="book_tags">
                <li className="book_tag">Book tags</li>
                <li className="book_tag">Book tags</li>
                <li className="book_tag">Book tags</li>
              </ul>
            </div>
            <form className="book_form">
              <div className="book_price">
                <span className="title">Price, $</span>
                <span className="value">{book.price}</span>
              </div>
              <div className="book_count">
                <label className="count">Count</label>
                <div className="book_input">
                  <input onChange={handleCountChange} id="count-input" max="42" min="1" type="number" value={count} />
                  <button onClick={decrementCount} className="decrement" type="button">▼</button>
                  <button onClick={incrementCount} className="increment" type="button">▲</button>
                </div>
              </div>
              <div className="book_total">
                <span className="title">Total price</span>
                <span className="value">{totalCost}</span>
              </div>

              <Button onClick={handleAddToCart} className="my-button undefined" type="button">Add to Cart</Button>
            </form> 
          </div>
        </div>
        <p className="book_description">
          {book.description}
        </p>
      </div>
  );
}

export default Book;
