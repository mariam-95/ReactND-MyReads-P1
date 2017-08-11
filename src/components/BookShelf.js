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
    const { title, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, idx) => (
              <Book
                key={idx}
                shelf={book.shelf}
                thumbnail={book.imageLinks.thumbnail}
                title={book.title}
                authors={book.authors}
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
  title: PropTypes.string,
  books: PropTypes.array,
  refetchBooks: PropTypes.func,
}

export default BookShelf;
