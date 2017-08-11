import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import SearchBar from './SearchBar';
import BookShelf from './BookShelf';
import '../stylesheets/App.css';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf />
        )} />
        <Route path="/search" render={() => (
          <SearchBar />
        )} />
      </div>
    )
  }
}

export default BooksApp
