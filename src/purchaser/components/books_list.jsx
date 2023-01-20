import React from 'react';
import { connect } from 'react-redux';
import BookTile from './book_tile';
import { loadBooks, addBookToCart } from '../actions/books';
import '../stylesheets/books_list.css';
import Alert from 'react-bootstrap/Alert';

class BooksList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    this.props.dispatch(loadBooks()).then((response)=> {
      this.setState({books: response})
    })
  }

  addItemToCart(data){
    console.log(data);
    this.props.dispatch(addBookToCart({newBook: data}))
  }

  render() {
    let books = [
      {'name': 'Calculus', 'author': 'Arnold', 'price': 19.79, 'description': 'Some varyingly long description here for Calculus book'},
      {'name': 'Trigonometry', 'author': 'RD Sharma', 'price': 99.79, 'description': 'Some varyingly long description here for Trigonometry book'},
      {'name': 'Personal Finance', 'author': 'Unknown Sharma', 'price': 4.79, 'description': 'Some varyingly long description here for this book'},
      {'name': 'Intro to Stocks', 'author': 'Robinhood', 'price': 89.79, 'description': 'Some varyingly long description here for Intro to Stocks'},
      {'name': 'Hedge Funds', 'author': 'Myself', 'price': 549.99, 'description': 'Some varyingly long description here for Hedge Funds book'},
      {'name': 'Bank Securities', 'author': 'RBC Bank', 'price': 29.99, 'description': 'Some varyingly long description here for Bank Securities book'},
      {'name': 'Monetary Bonds', 'author': 'Govt. of Canada', 'price': 39.79, 'description': 'Some varyingly long description here for Monetary Bonds book'},
      {'name': 'Calculus', 'author': 'Arnold', 'price': 19.79, 'description': 'Some varyingly long description here for Calculus book'},
      {'name': 'Trigonometry', 'author': 'RD Sharma', 'price': 99.79, 'description': 'Some varyingly long description here for Trigonometry book'},
      {'name': 'Personal Finance', 'author': 'Unknown Sharma', 'price': 4.79, 'description': 'Some varyingly long description here for this book'},
      {'name': 'Intro to Stocks', 'author': 'Robinhood', 'price': 89.79, 'description': 'Some varyingly long description here for Intro to Stocks'},
      {'name': 'Hedge Funds', 'author': 'Myself', 'price': 549.99, 'description': 'Some varyingly long description here for Hedge Funds book'},
      {'name': 'Bank Securities', 'author': 'RBC Bank', 'price': 29.99, 'description': 'Some varyingly long description here for Bank Securities book'},
      {'name': 'Monetary Bonds', 'author': 'Govt. of Canada', 'price': 39.79, 'description': 'Some varyingly long description here for Monetary Bonds book'},
      {'name': 'Calculus', 'author': 'Arnold', 'price': 19.79, 'description': 'Some varyingly long description here for Calculus book'},
      {'name': 'Trigonometry', 'author': 'RD Sharma', 'price': 99.79, 'description': 'Some varyingly long description here for Trigonometry book'},
      {'name': 'Personal Finance', 'author': 'Unknown Sharma', 'price': 4.79, 'description': 'Some varyingly long description here for this book'},
      {'name': 'Intro to Stocks', 'author': 'Robinhood', 'price': 89.79, 'description': 'Some varyingly long description here for Intro to Stocks'},
      {'name': 'Hedge Funds', 'author': 'Myself', 'price': 549.99, 'description': 'Some varyingly long description here for Hedge Funds book'},
      {'name': 'Bank Securities', 'author': 'RBC Bank', 'price': 29.99, 'description': 'Some varyingly long description here for Bank Securities book'},
      {'name': 'Monetary Bonds', 'author': 'Govt. of Canada', 'price': 39.79, 'description': 'Some varyingly long description here for Monetary Bonds book'},
      {'name': 'Calculus', 'author': 'Arnold', 'price': 19.79, 'description': 'Some varyingly long description here for Calculus book'},
      {'name': 'Trigonometry', 'author': 'RD Sharma', 'price': 99.79, 'description': 'Some varyingly long description here for Trigonometry book'},
      {'name': 'Personal Finance', 'author': 'Unknown Sharma', 'price': 4.79, 'description': 'Some varyingly long description here for this book'},
      {'name': 'Intro to Stocks', 'author': 'Robinhood', 'price': 89.79, 'description': 'Some varyingly long description here for Intro to Stocks'},
      {'name': 'Hedge Funds', 'author': 'Myself', 'price': 549.99, 'description': 'Some varyingly long description here for Hedge Funds book'},
      {'name': 'Bank Securities', 'author': 'RBC Bank', 'price': 29.99, 'description': 'Some varyingly long description here for Bank Securities book'},
      {'name': 'Monetary Bonds', 'author': 'Govt. of Canada', 'price': 39.79, 'description': 'Some varyingly long description here for Monetary Bonds book'},
      {'name': 'Bank Securities', 'author': 'RBC Bank', 'price': 29.99, 'description': 'Some varyingly long description here for Bank Securities book'},
      {'name': 'Monetary Bonds', 'author': 'Govt. of Canada', 'price': 39.79, 'description': 'Some varyingly long description here for Monetary Bonds book'},
    ];
    return(
      <div className="flex-container">
        { 
        // this.state.books &&
          books.map(book => {
            return <BookTile 
                      name={book['name']} 
                      author={book['author']}
                      price={book['price']}
                      description={book['description']}
                      itemToCart={(data) => {this.addItemToCart(data)}}
                    />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps)(BooksList);
export { BooksList };