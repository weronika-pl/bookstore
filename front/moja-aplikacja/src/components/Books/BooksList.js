import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/operations'
import { addToShoppingCart } from "../../redux/basket/basketActions";
import Error from "./Error";
import "./style.css";


const BooksList = () => {

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getAllBooks()) }, []);
  
  const booksList = useSelector(state => state.books.books);
  const errorMessage = useSelector(state => state.books.errorMessage)
  const isError = useSelector(state => state.books.isError)
  const errorCode = useSelector(state => state.books.errorCode)

  const handleShoppingCart = book => dispatch(addToShoppingCart(book));

  const addingBook = (e, book) => {
    // dlaczego 0?
    const key = e.which || e.keyCode || 0;
    if (key === 13) {
        handleShoppingCart(book);
    }
  }

  // staraj sie unikac czegos takiego
  // jesli musisz wywalic czesc HTMLu z returna, to wyrzuc do funkcji
  // renderedBooksList = () => booksList.map...
  const renderedBooksList =  booksList.map(book => {
    // to do osobnego komponentu Single Book- dumb component, ktory tylko wyswietla ksiazke
    // funkcje dodawania etc. zostaja tu i wedruja do SingleBook propsami 
    // zdekonstruktuj const book w SingleBook
    return (<li className="box" key={book.id}>
      <img className="book-cover" aria-label="book-cover" src={book.cover_url}></img>
      <p className="title">
        {book.title}
      </p>
      <p className="author">
        {book.author}
      </p>
      <p className="price">
        {(book.price / 100).toFixed(2)} zł
      </p>
      <p className="pages">
        Liczba stron: {book.pages}
      </p>
      <button
        className="add-to-cart"
        aria-label="add to cart"
        type="button"
        onClick={() => handleShoppingCart(book)}
        onKeyDown={e => addingBook(e, book)}>
        DODAJ DO KOSZYKA
      </button>
  </li>)});

  return <ul className="list">
    {/* renderedBooksList() */}
    {isError ? <Error errorCode={errorCode} errorMessage={errorMessage}/>:
    renderedBooksList }
  </ul>;

}

export default BooksList;