import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';
import * as BooksAPI from '../BooksAPI';

export default class BookShelfContainer extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({
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
          <BookShelf
            title="Currently Reading"
            books={currentlyReading}
            refetchBooks={this.fetchBooks}
          />
          <BookShelf
            title="Want To Read"
            books={wantToRead}
            refetchBooks={this.fetchBooks}
          />
          <BookShelf
            title="Read"
            books={read}
            refetchBooks={this.fetchBooks}
          />
        </div>
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    );
  }
}
