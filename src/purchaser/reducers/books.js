import { booksConstants } from '../actions/constants/books';

var booksReducer = function (state = [], action) {

  switch (action.type) {
    case booksConstants.LOAD_BOOKS:
      return action.books;
      case booksConstants.APPEND_NEW_BOOK:
        console.log(action)
      return [
        ...state, {
          name: action.newBook.name,
          author: action.newBook.author,
          price: action.newBook.price,
          description: action.newBook.description,
        }
      ]
    default:
      return state;
  }
}

export { booksReducer };