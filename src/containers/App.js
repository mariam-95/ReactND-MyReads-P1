import React from 'react';
import { Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import BookShelfContainer from './BookShelfContainer';
import '../stylesheets/App.css';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BookShelfContainer} />
        <Route path="/search" component={SearchBar} />
      </div>
    );
  }
}

export default BooksApp;
