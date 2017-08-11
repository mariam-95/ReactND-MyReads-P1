import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';
import * as BooksAPI from '../BooksAPI';

export default class BookShelfContainer extends Component {
  state = {
    selectedShelf: 'currentlyReading',
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

  chooseShelf = (ev) => {
    this.setState({ selectedShelf: ev.target.value });
  }

  isActiveShelf = (name) => {
    return name === this.state.selectedShelf ? 'active-shelf' : '';
  }

  renderBookShelf = (title, books) => {
    return (
      <BookShelf
        books={books}
        refetchBooks={this.fetchBooks}
      />
    )
  }

  render() {
    const { selectedShelf } = this.state;
    return (
      <div className="list">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {this.renderBookShelf(selectedShelf, this.state[selectedShelf])}
          </div>
        </div>
        <div className="list-books-control">
          <button className={this.isActiveShelf('currentlyReading')} onClick={this.chooseShelf} value="currentlyReading">Currently Reading</button>
          <button className={this.isActiveShelf('wantToRead')} onClick={this.chooseShelf} value="wantToRead">Want To Read</button>
          <button className={this.isActiveShelf('read')} onClick={this.chooseShelf} value="read">Read</button>
        </div>
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    );
  }
}
