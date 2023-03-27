import React, { useContext, useState } from 'react';
import './styles.scss';
import img from '../../images/imageNotFound.png'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { CartContext } from '../../context/CartContext/CartContext';

const Book = ({book}) => {
    let title = book.title.length > 24 ? book.title.substring(0, 24) + "..." : book.title;

    const { addToCart } = useContext(CartContext);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const handleAddToCart = () => {
        const cartItem = {
          book: book,
          count: 1,
          totalCost: book.price
        };
          addToCart(cartItem);
          setCart([...cart, cartItem]);
          localStorage.setItem('cart', JSON.stringify([...cart, cartItem]));
    
      };
    return (
        // <Link to={`/book/${book.id}` } className="book-card animate_fadeInDown" id={book.id}>
        //     <div className="book-card_img" id={book.id}>
        //         <img src={book.image || img} alt="Default book image" error="this.src='../img/imageNotFound.png'"/>
        //     </div>
        //     <div className="book-card_content">
        //         <h3 className="book-card_title">{title}</h3>
        //         <h4 className="book-card_author">{book.author}</h4>
        //         <div className="book-card_footer">
        //             <span className="book-card_price">{book.price}$</span>
        //                 {/* <Link to={`/book/${book.id}`} className="my-button view-book">View</Link> */}
        //                 <Button onClick={handleAddToCart} className="view-book" >Add to Cart</Button>
        //         </div>
        //     </div>
        // </Link>
            <div className="book-card animate_fadeInDown" id={book.id}>
                <Link to={`/book/${book.id}`  } className="book-link">
                    <div className="book-card_img" id={book.id}>
                        <img src={book.image || img} alt="Default book image" error="this.src='../img/imageNotFound.png'"/>
                    </div>
                    <div className="book-card_content">
                        <h3 className="book-card_title">{title}</h3>
                        <h4 className="book-card_author">{book.author}</h4>
                        <div className="book-card_footer">
                            <span className="book-card_price">{book.price}$</span>
                        </div>
                    </div>
                </Link>
                <div className="book-adding">
                    <Button onClick={handleAddToCart} className="view-book">Add to Cart</Button>
                </div>
            </div>
    )
};

export default Book;