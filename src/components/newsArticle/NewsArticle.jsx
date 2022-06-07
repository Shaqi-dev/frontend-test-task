import React from 'react';
import PropTypes from 'prop-types';
import users from '../../db/users';
import './NewsArticle.scss';

function NewsArticle({
  title,
  description,
  image,
  authorId,
  datePosted,
}) {
  const authorName = users.find((user) => user.id === authorId).name;
  const authorNameFormatted = authorName.charAt(0).toUpperCase() + authorName.slice(1);
  return (
    <div className="news-article">
      <div className="news-article__img">
        <img src={image} alt="News article" />
      </div>
      <div className="news-article__content">
        <h3 className="news-article__title">{title}</h3>
        <p className="news-article__text">{description}</p>
        <div className="news-article__footer">
          <span className="news-article__author">{authorNameFormatted}</span>
          <span className="news-article__date">{datePosted}</span>
        </div>
      </div>
    </div>
  );
}
NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  datePosted: PropTypes.string.isRequired,
};

export default NewsArticle;
