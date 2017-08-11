import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ thumbnail, title, authors }) => (
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
          <select>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors.map(author => author)}
      </div>
    </div>
  </li>
);

Book.proptypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.array,
}

export default Book;
