import React from 'react';
import './styles.scss';
import img from '../../images/imageNotFound.png'
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    let title = book.title.length > 24 ? book.title.substring(0, 24) + "..." : book.title;

    return (
        <div className="book-card animate_fadeInDown" id={book.id}>
            <div className="book-card_img" id={book.id}>
                <img src={book.image || img} alt="Default book image" error="this.src='../img/imageNotFound.png'"/>
            </div>
            <div className="book-card_content">
                <h3 className="book-card_title">{title}</h3>
                <h4 className="book-card_author">{book.author}</h4>
                <div className="book-card_footer">
                    <span className="book-card_price">{book.price}$</span>
                    <Link to={`/book/${book.id}`} className="my-button view-book">View</Link>
                </div>
            </div>
        </div>
    )
};

export default Book;