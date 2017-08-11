import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';
import * as BooksAPI from '../BooksAPI';

export default class BookShelfContainer extends Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books,
        currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: books.filter(book => book.shelf === 'wantToRead'),
        read: books.filter(book => book.shelf === 'read'),
      });
    });
  }

  render() {
    const {
      currentlyReading,
      wantToRead,
      read
    } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              books={currentlyReading}
            />
            <BookShelf
              title="Want To Read"
              books={wantToRead}
            />
            <BookShelf
              title="Read"
              books={read}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    );
  }
}
