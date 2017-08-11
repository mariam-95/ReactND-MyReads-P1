import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../components/Book';
import * as BooksAPI from '../BooksAPI';

export default class SearchBar extends Component {
  state = {
    results: [],
  }

  handleSearch = (ev) => {
    const query = ev.target.value.trim();
    if (query) {
      BooksAPI.search(query, 20).then((results) => {
        if (results.length > 0) {
          this.setState({
            results: results.filter(book => book.imageLinks)
          });
        }
      });
    }
  }

  handleMove = (ev, book) => {
    const shelf = ev.target.value;
    BooksAPI.update(book, shelf).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.length > 0 && results.map((book, idx) => (
              <Book
                key={idx}
                shelf="none"
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
