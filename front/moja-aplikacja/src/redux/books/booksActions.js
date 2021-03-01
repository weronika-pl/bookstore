export const fetchingBooks = item => ({
  type: 'SET_BOOKS',
  payload: item
})

export const fetchAllBooks = item => ({
  type: 'SET_ALL_BOOKS',
  payload: item,
});

export const fetchBooksError = e => ({
  type: `${prefix}_SET_BOOKS_ERROR`,
  payload: {
    message: e.message,
    code: e.code || 500,
  }
});

const prefix = 'BOOKS'