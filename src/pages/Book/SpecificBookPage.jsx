import * as React from 'react';
import "./styles.scss";
import Book from "./Book"
import { getStoragedBooks } from '../../context/BooksContext/BooksStorage/BooksStorage';


const books = getStoragedBooks()
const SpecificBookPage = () =>(
  <Book books={books}>
    
  </Book>
);

export default SpecificBookPage;
