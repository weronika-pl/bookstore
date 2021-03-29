import { fetchingBooks, fetchBooksError, fetchBooksLoading, getBooksByPage } from "./books/booksActions";
import { url } from "../assets/url";

const numOfPages = [1, 2];

const fetchBooks = async () => {
    try {
        const response = await Promise.all(numOfPages.map(async page => {
            return (await (await fetch(`${url}book?page=${page}`)).json()).data
        }));
        if (!response) throw (new Error('Błąd serwera'))
        return response.reduce((a, b) => a.concat(b), [])
    } catch (error) {
        throw error;
    }
}

const fetchOnePageOfBooks = async (page) => {
    const response = await (await fetch(`${url}book?page=${page}`)).json();
    return response.data;
}

export const getAllBooks = () => async dispatch => {
    try {
        dispatch(fetchBooksLoading());
        const books = await fetchBooks();
        setTimeout(() => { dispatch(fetchingBooks(books))}, 3000);
    } catch (error) {
        dispatch(fetchBooksError(error))
    }
}

export const getBooksPagination = (page) => async dispatch => {
    try {
        dispatch(fetchBooksLoading());
        const data = await fetchOnePageOfBooks(page);
        setTimeout(() => {dispatch(fetchingBooks(data))})
    }
    catch (err) {
        dispatch(fetchBooksError(err))
    }
}