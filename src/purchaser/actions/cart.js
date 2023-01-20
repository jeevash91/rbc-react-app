import CartAPI from "../api/cart_api"
import { cartConstants } from './constants/cart'


var loadCart = function (params = {}) {
  return function (dispatch) {
    return CartAPI.loadCart(params)
      .then(response => {
        dispatch({ type: cartConstants.LOAD_CART, books: response.data.cart })
      })
      .catch(error => {
        console.log('An error occurred while attempting to load cart items.')
      })
  }
}

var removeItemFromCart = function (newBook) {
  return {
    type: cartConstants.REMOVE_ITEM_FROM_CART,
    newBook: newBook
  }
}

export { loadCart, removeItemFromCart };