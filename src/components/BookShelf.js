import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  render() {
    const { title, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, idx) => (
              <Book
                key={idx}
                thumbnail={book.imageLinks.thumbnail}
                title={book.title}
                authors={book.authors}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.proptypes = {
  title: PropTypes.string,
  books: PropTypes.array,
}

export default BookShelf;
