import * as React from 'react';
import "./styles.scss";
import Book from "./Book"
import { getBooks } from '../../context/BooksContext/BooksStorage/BooksStorage';
import {useParams} from "react-router-dom";

const SpecificBookPage = () => {
    const books = getBooks()
    const { id } = useParams();

    return (
        <Book book={books.books[id]} />
    );
}

export default SpecificBookPage;
