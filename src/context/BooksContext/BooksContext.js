import React, { createContext, useReducer} from 'react';
import { getStoragedBooks } from './BooksStorage/BooksStorage';
import {INITIAL_BOOKS} from "../../actions";

export const BooksContext = createContext();

const initialState = getStoragedBooks() || [];

export const booksReducer = (state, action) => {
  switch (action.type) {
    case INITIAL_BOOKS:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
};

export const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};

 
