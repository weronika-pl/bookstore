import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/operations'
import { addToShoppingCart } from "../../redux/basket/basketActions";
import "./style.css";


const BooksList = () => {

  const dispatch = useDispatch();

  useEffect(() => { console.log('called'); dispatch(getAllBooks()) }, []);
  
  const booksList = useSelector(state => state.books.books);

  const handleShoppingCart = book => dispatch(addToShoppingCart(book));

  const addingBook = (e, book) => {
    const key = e.which || e.keyCode || 0;
    if (key === 13) {
        handleShoppingCart(book);
    }
  }

  const renderedBooksList = booksList.map(book => {
    return <li className="box" key={book.id}>
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
        aria-label="add-to-cart"
        type="button"
        onClick={() => handleShoppingCart(book)}
        onKeyDown={e => addingBook(e, book)}>
        DODAJ DO KOSZYKA
      </button>
    </li>;
  });

  return <ul className="list">
    {renderedBooksList}
  </ul>;

}

export default BooksList;