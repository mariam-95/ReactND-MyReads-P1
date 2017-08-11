import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class BookShelf extends Component {
  handleMove = (ev, book) => {
    const shelf = ev.target.value;
    BooksAPI.update(book, shelf).then(() => {
      this.props.refetchBooks();
    });
  }

  render() {
    const { books } = this.props;
    return (
      <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, idx) => (
              <Book
                key={idx}
                shelf={book.shelf}
                thumbnail={book.imageLinks.thumbnail}
                moveTo={ev => this.handleMove(ev, book)}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.proptypes = {
  books: PropTypes.array,
  refetchBooks: PropTypes.func,
}

export default BookShelf;
