import * as React from 'react';
import "./styles.scss";
import Book from "./Book"
import { getStoragedBooks } from '../../context/BooksContext/BooksStorage/BooksStorage';
import {useParams} from "react-router-dom";

const SpecificBookPage = () => {
    const books = getStoragedBooks()
    const { id } = useParams();

    return (
        <Book book={books.books[id]} />
    );
}

export default SpecificBookPage;
