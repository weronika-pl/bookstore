import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBooksPagination } from "../../redux/operations";
import { addToShoppingCart } from "../../redux/basket/basketActions";
import "./style.css";
import { renderedBooksList } from "./renderedBooksList";
import ErrorComponent from "./Error";
import Pagination from "./Pagination";

const BooksList = () => {
  const dispatch = useDispatch();
  const { page } = useParams();
  const booksList = useSelector((state) => state.books.books);
  const filteredBooksList = useSelector((state) => state.books.filteredBooks);
  const errorMessage = useSelector((state) => state.books.errorMessage);
  const isError = useSelector((state) => state.books.isError);
  const errorCode = useSelector((state) => state.books.errorCode);
  const isLoading = useSelector((state) => state.books.isLoading);

  useEffect(() => {
    dispatch(getBooksPagination(page));
  }, [page]);

  const handleShoppingCart = (book) => dispatch(addToShoppingCart(book));

  const addingBook = (e, book) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      handleShoppingCart(book);
    }
  };

  const actualList = filteredBooksList.length ? filteredBooksList : booksList;

  if (isLoading) {
    // osobny komponent na loader
    return <h1>Loading...</h1>;
  }
  return (
    <ul className="list">
      {isError ? (
        ErrorComponent(errorCode, errorMessage)
      ) : (
        <>
          {renderedBooksList(actualList, handleShoppingCart, addingBook)}
          <Pagination
            currentPage={page}
          />{" "}
        </>
      )}
    </ul>
  );
};

export default BooksList;
