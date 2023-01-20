import BooksAPI from "../api/books_api"
import { booksConstants } from './constants/books'


var loadBooks = function (params = {}) {
  return function (dispatch) {
    return BooksAPI.loadBooks(params)
      .then(response => {
        dispatch({ type: booksConstants.LOAD_BOOKS, books: response.data.books })
      })
      .catch(error => {
        console.log('An error occurred while attempting to load books.')
      })
  }
}

var addBookToCart = function (newBook) {
  return {
    type: booksConstants.APPEND_NEW_BOOK,
    newBook: newBook
  }
}

export { loadBooks, addBookToCart };