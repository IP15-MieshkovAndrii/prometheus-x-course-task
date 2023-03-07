export const INITIAL_BOOKS = "INITIAL_BOOKS";
export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const INITIAL_SPECIFIC_BOOK = "INITIAL_SPECIFIC_BOOK";
export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";


export const fetchBooks = (payload) => ({
    type: INITIAL_BOOKS,
    payload
});