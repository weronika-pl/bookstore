export const fetchingBooks = item => ({
  type: 'SET_BOOKS',
  payload: item
})

export const searchingBooks = item => ({
  type: 'SEARCH_BOOKS',
  payload: item
})