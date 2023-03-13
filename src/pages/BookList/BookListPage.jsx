import React, {useEffect, useState} from 'react';
import './styles.scss';
import img from '../../images/search.png'
import Book from './Book';
import { ThreeDots } from 'react-loader-spinner';
// import { useBooks } from '../../context/BooksContext/useBooks';
import { getBooks } from '../../context/BooksContext/BooksStorage/BooksStorage';

const BookListPage = () => {
    // const {state: { books }, dispatch } = useBooks()
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([])

    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data)
        })
    }, [])

    // if (books === 0){
    //     books = getBooks(dispatch)
    //     books = getStoragedBooks()
    // }

    // console.log(books)
    // useEffect(() => {
    //     const res =  getBooks(dispatch)
    // } , [dispatch])

    useEffect(() => {
        const results = books
        ?.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
        ?.filter(book => {
            if (priceRange === '') return true;
            if (priceRange === 'low') return book.price < 15;
            if (priceRange === 'medium') return book.price >= 15 && book.price < 30;
            if (priceRange === 'high') return book.price >= 30;
        });
        setFilteredBooks(results)
    }, [priceRange, searchTerm, books])


    const handlePriceFilter = (event) => {
        setPriceRange(event.target.value);
    }

    return (
        <div className="books">
            <div className="books_header">
                <div className="search_input">
                    <label htmlFor="search_input">
                            <img src={img} alt="Значок пошуку"/>
                        </label>
                        <input
                            placeholder="Search by book name"
                            className="input"
                            type="text"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}/>
                    </div>
                    <div className="dropdown">
                        <label className="dropdown_label" htmlFor="dropdown_button">
                            <font>
                                <font>Price</font>
                            </font>
                        </label>
                        <select id="price_range" className="dropdown_button" value={priceRange} onChange={handlePriceFilter}>
                            <option value="">All</option>
                            <option value="low">0 &lt; Price &lt; 15</option>
                            <option value="medium">15 &lt; Price &lt; 30</option>
                            <option value="high">Price &gt;= 30</option>
                        </select>
                    </div>
                </div>
                {books !== 0 ?
                    <div className="books_content">
                    {
                        filteredBooks?.length === 0 ?
                            <p className='no_book'>
                                Not found
                            </p>
                        :
                            filteredBooks?.map(book => (
                                <Book key={book.id} book={book} />
                    ))}
                </div>
                :
                <div
                    className="loader"
                    data-testid='loader'
                >
                    <ThreeDots
                        height="120px"
                        width="120px"
                        radius="10"
                        align-items="center"
                        color="rgba(0, 0, 0, 1)"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        className="loader"
                    />
                </div>
                }
            </div>
    );
}

export default BookListPage;
