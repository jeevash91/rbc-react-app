import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/cart.css';
import CartItem from './cart_item';
import logo from '../../images/liblogo2.png';
import { loadCart } from '../actions/cart';

class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cartItems: [],
    }
  }

  componentDidMount() {
    this.props.dispatch(loadCart(loadCart)).then((response) => {
      this.setState({cartItems: response});
    })
  }

  showcartTotal(items) {
    // let items = this.state.cartItems
    if(items == undefined) { return 0; }
    let total = 0;
    for(let idx = 0; idx < items.length; idx++) {
      total += items[idx].price;
    }
    return Math.round(total * 100) / 100;
  }

  handleItemDelete(items, data) {
    let newCartItems = [];
    newCartItems = items.filter(item => {
      return (data.name != item.name && data.price != item.price)
    })
    // let newItems = [{'name': 'Calculus', 'author': 'Arnold', 'price': 19.79, 'description': 'Some varyingly long description here for Calculus book'}];
    this.setState({cartItems: newCartItems});
  }

  render() {
    let cartItems = [
      {'name': 'Calculus', 'author': 'Arnold', 'price': 19.79, 'description': 'Some varyingly long description here for Calculus book'},
      {'name': 'Trigonometry', 'author': 'RD Sharma', 'price': 99.79, 'description': 'Some varyingly long description here for Trigonometry book'},
      {'name': 'Personal Finance', 'author': 'Unknown Sharma', 'price': 4.79, 'description': 'Some varyingly long description here for this book'},
      {'name': 'Intro to Stocks', 'author': 'Robinhood', 'price': 89.79, 'description': 'Some varyingly long description here for Intro to Stocks'},
      {'name': 'Hedge Funds', 'author': 'Myself', 'price': 549.99, 'description': 'Some varyingly long description here for Hedge Funds book'},
    ]
    if(this.state.cartItems) {
      cartItems = this.state.cartItems;
    }
    return(
      <div className="flex-container-row">
        {
        // this.state.cartItems && 
        // this.state.cartItems.map(item => {
        cartItems.map(item => {
          return <CartItem 
                    bookImage={logo}
                    bookName={item.name}
                    author={item.author}
                    price={item.price}
                    deleteItem={(item) => {this.handleItemDelete(cartItems, item)}}
                  />
        })}
        {
          !cartItems &&
          !this.state.cartItems && <div className='flex-item-cart'>Cart is Empty</div>
        }
        <div className="flex-item-cart-total">
          <b>
            {`$${this.showcartTotal(cartItems)}`}
          </b>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  }
}

export default connect(mapStateToProps)(Cart);
export { Cart };