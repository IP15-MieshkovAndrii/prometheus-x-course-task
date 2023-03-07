import { useState } from "react";
import Trash from "../SVG/Trash";
import "./Purchase.scss";

const Purchase = ({ book, count, price, onCountChange, onClick }) => {
  const [currentCount, setCurrentCount] = useState(count);

  const incrementBookHandler = () => {
    if (currentCount < 42) {
        setCurrentCount(currentCount + 1);
        onCountChange(book.id, currentCount + 1);
    }
  };

  const decrementBookHandler = () => {
    if (currentCount > 1) {
      setCurrentCount(currentCount - 1);
      onCountChange(book, currentCount - 1);
    }
  };

  const removeHandler = () => {
    onClick(book);
  };

  return (
    <div className="book" id={book.id}>
      <span className="book_name">{book.title}</span>
      <span className="book_count">
        {currentCount === 1 ? currentCount + " pc." : currentCount + " pcs."}
      </span>
      <span className="book_price">{price.toFixed(2)}$</span>
      <span className="book_total-price">{(price * currentCount).toFixed(2)}$</span>
      <div className="book_amount-buttons">
        <button className="decrement" onClick={decrementBookHandler}>
          -
        </button>
        <button className="increment" onClick={incrementBookHandler}>
          +
        </button>
      </div>
      <button className="book__remove" onClick={removeHandler}>
        <Trash />
      </button>
    </div>
  );
};

export default Purchase;
