export const fetchingBooks = item => ({
  type: 'SET_BOOKS',
  payload: item
})

export const searchingBooks = item => ({
  type: 'SEARCH_BOOKS',
  payload: item
})

export const fetchBooksError = e => ({
  type: 'SET_BOOKS_ERROR',
  payload: {
    message: e.message,
    code: e.code || 500,
  }
});

export const fetchBooksLoading = () => ({
  type: 'SET_BOOKS_LOADING',
})

export const getBooksByPage = (page) => ({
  type: 'GET_BOOKS_BY_PAGE',
  payload: page,
});

export const setCurrentPage = (pageNumber) => ({
  type: 'SET_CURRENT_PAGE',
  payload: pageNumber,
})