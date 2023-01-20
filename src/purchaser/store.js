import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { booksReducer } from './reducers/books';
import { cartReducer } from './reducers/cart';

const middleware = [thunk];

var reducer = combineReducers({
  books: booksReducer,
  cartItems: cartReducer,
})

var initialState = {}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
export default createStoreWithMiddleware(reducer, initialState);