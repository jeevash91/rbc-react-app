import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import bookImg from '../../images/liblogo.jpeg';
import bookImg2 from '../../images/liblogo2.png';
import '../stylesheets/book_tile.css';
import BookDetailsModal from './book_details_modal';
import { BsCartPlus } from 'react-icons/bs';

class BookTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.handleModal = this.handleModal.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleModal() {
    this.setState({showModal: !this.state.showModal});
  }

  addToCart() {
    console.log(this.props);
    this.props.itemToCart(this.props);
  }

  render() {
    let imgSource = this.props.name === 'Calculus' ? bookImg2 : bookImg;
    return(
      <>
        <BookDetailsModal
            name={this.props.name}
            description={this.props.description}
            displayModal={this.state.showModal}
            hide={()=>{this.handleModal()}}
          />
        <div className="flex-item">
          <div className='img-div'>
            <img src={imgSource} className="book-img" alt="book photo" />
            <Link>
              <span className='fixed_width cart-icon' onClick={this.addToCart}>
                <BsCartPlus 
                  size={'2em'}
                />
              </span>
            </Link>
          </div>
          <hr />
          <div className='fixed_width'>
            {this.props.name}
          </div>
          <div className='fixed_width'>
            {this.props.author}
          </div>
          <div className='fixed_width'>
            {this.props.price}
          </div>
          <div className='fixed_width btn-description'>
            <Button size="sm" variant="secondary" onClick={this.handleModal}><b>About this Book</b></Button>
          </div>
        </div>
      </>
    )
  }
}

export default BookTile;