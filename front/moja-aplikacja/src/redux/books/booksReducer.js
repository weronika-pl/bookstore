const INITIAL_STATE = {
  books: [],
  isError: false,
  errorMessage: '',
  errorCode: -1,
}

//const booksReducer = (state = INITIAL_STATE, { type, payload}) => {
const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state, 
        //books: [...new Set([...state.books, ...action.payload])]
        books: [...state.books, action.payload].filter(({id}, index, arr) => arr.findIndex((b) => b.id === id) === index)
        //books: [...state.books, action.payload].filter((book, index, arr) => console.log(book.id, index, arr.indexOf(book)) || arr.indexOf(book) === index)
      }
    case 'SET_ALL_BOOKS': 
      return {
        ...state,
        books: action.payload,
      }
    case 'SET_BOOKS_ERROR': {
      return { 
        ...state,
        isError: true,
        errorMessage: action.payload.message,
        errorCode: action.payload.code,
      }
    }
    default:
      return state
  }
}

export default booksReducer