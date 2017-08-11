import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  handleOnChange = (ev) => {
    this.props.moveTo(ev.target.value.trim());
  }

  render() {
    const { shelf, thumbnail } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${thumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.handleOnChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  shelf: PropTypes.string,
  thumbnail: PropTypes.string,
  handleMove: PropTypes.func,
}

export default Book;
