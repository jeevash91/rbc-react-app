import axios from '../../shared/axios'

class BooksAPI {
  static loadBooks(params = {}) {
    return axios.get(`/api/v1/learner`, {params: params})
  }

  static addBookToCart(id, params = {}) {
    return axios.post(`api/v1/learner/${id}/cart`, {params: params})
  }
}

export default BooksAPI;
export { BooksAPI };