import React from 'react';

import Navbar from './components/navbar';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
