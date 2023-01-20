import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/navbar.css';
import liblogo from '../../images/liblogo2.png';

class Navbar extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <span className="header-view">
            <Link to={`api/v1/books`}>
              <img src={liblogo} className='header-logo' alt='logo' />
            </Link>
          </span>
          <span className="header-view">
            <Link to={`api/v1/books`}>
              Books
            </Link>
          </span>
          <span className="header-view">
            <Link to={`api/v1/cart`}>
              Cart
            </Link>
          </span>
        </header>
      </div>
    );
  }
}

export default Navbar;
