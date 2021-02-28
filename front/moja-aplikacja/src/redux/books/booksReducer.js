import { updateList } from "./booksUtils"

const INITIAL_STATE = {
  books: [],
  filteredBooks: []
}

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state, 
        books: action.payload
      }
    case 'SEARCH_BOOKS':
      return {
        ...state,
        filteredBooks: updateList({
          searchName: action.payload,
          books: state.books
        })
      }
    default:
      return state
  }
}

export default booksReducer