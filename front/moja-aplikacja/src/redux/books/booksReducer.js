const INITIAL_STATE = {
  books: []
}

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state, 
        books: [...new Set([...state.books, action.payload])]
      }
    default:
      return state
  }
}

export default booksReducer