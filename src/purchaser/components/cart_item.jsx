import React from 'react';
import '../stylesheets/cart_item.css';
import { FaMinusCircle } from 'react-icons/fa';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteItem(this.props);
  }

  render() {
    return(
      <>
        <div className='flex-container-cart'>
          <div className='flex-item-cart'>
            <div className='img-div-cart'>
              <img src={this.props.bookImage} className="img-div-cart"/>
            </div>
          </div>
          <div className='flex-container-cart-column'>
            <div className='flex-item-cart-book-details'>
              {this.props.bookName}
            </div>
            <div className='flex-item-cart-book-details'>
              {this.props.author}
            </div>
            <div className='flex-item-cart-book-details'>
              {this.props.author}
            </div>
          </div>
          <div className='flex-container-cart-price'>
            <div className='flex-item-price'>
              {this.props.price}
            </div>
          </div>
          <div className="flex-item-cart-delete">
            <FaMinusCircle color="maroon" onClick={this.handleDelete} />
          </div>
        </div>
        <hr />
      </>
    )
  }
}

export default CartItem;