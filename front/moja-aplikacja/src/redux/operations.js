import { fetchingBooks, fetchAllBooks, fetchBooksError } from "./books/booksActions";

const numOfPages = [1, 2];
// url w jednej zmiennej w osobnym pliku, importowane do każdego pliku operations
const url = `http://localhost:3001`;

const fetchBooks = async () => {
  // try catch!!!

  // bardzo dobrze!!
//   try {
    const response = await Promise.all(
      numOfPages.map(async page => {
        // const res = await fetch(`http://localhost:3001/api/book?page=${page}`);
        // return  (await res.json()).data

        // return res.json();
       
        //return (await fetch(`http://localhost:3001/api/book?page=${page}`)).json();
        return (await (await fetch(`http://localhost:3001/api/book?page=${page}`)).json()).data;


        // uuuups..
        // throw new Error("serwer mowi spadaj");

      })
    );
    // const concatAllBooks = response.reduce(function(a,b){
    //     return a.data.concat(b.data)
    // });
    // return concatAllBooks
    return response.reduce((a, b) => a.concat(b), []);
//   } catch (e) {
//     throw e;
//   }
};

export const getAllBooks = () => async dispatch => {
 try {
    const books = await fetchBooks();
    dispatch(fetchAllBooks(books));
  } catch(e) {
    dispatch(fetchBooksError(e))
  }

  
  //books.map(book => dispatch(fetchingBooks(book)))
};
