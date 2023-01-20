import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './purchaser/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './purchaser/App.jsx';
import NotFound from './shared/components/not_found';
import BooksList from './purchaser/components/books_list';
import Cart from './purchaser/components/cart';

let baseURL = `api/v1`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Routes>
        <Route exact path={`${baseURL}/`} element={<BooksList />} />
        <Route exact path={`${baseURL}/books`} element={<BooksList />} />
        <Route exact path={`${baseURL}/cart`} element={<Cart />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
