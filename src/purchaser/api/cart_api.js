import axios from '../../shared/axios'

class CartAPI {
  static loadCart(params = {}) {
    return axios.get(`/api/v1/cart`, {params: params})
  }
}

export default CartAPI;
export { CartAPI };