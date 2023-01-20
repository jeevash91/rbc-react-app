import { cartConstants } from '../actions/constants/cart';

var cartReducer = function (state = [], action) {

  switch (action.type) {
    case cartConstants.LOAD_CART:
      return action.books;
    case cartConstants.REMOVE_ITEM_FROM_CART:
      console.log(action)
      state.cartItems = state.cartItems.filter(cartItem => {
        return (action.response.data.name != cartItem.name && action.response.data.price != cartItem.price)
      })
      return state;
    default:
      return state;
  }
}

export { cartReducer };