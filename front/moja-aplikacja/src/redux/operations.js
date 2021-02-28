import { fetchingBooks } from "./books/booksActions";

const numOfPages = [1,2];

const fetchBooks = async () => {
    const response = await Promise.all(numOfPages.map(async page => {
        const res = await fetch(`http://localhost:3001/api/book?page=${page}`);
        return await res.json();
    }));
    const concatAllBooks = response.reduce(function(a,b){
        return a.data.concat(b.data)
    });
    return concatAllBooks
}

export const getAllBooks = () => 
    async (dispatch) => {
        const books = await fetchBooks();
        dispatch(fetchingBooks(books))
    }