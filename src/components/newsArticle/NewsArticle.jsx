import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setApprove } from '../../redux/newsSlice';
import users from '../../db/users';
import './NewsArticle.scss';

function NewsArticle({
  id,
  title,
  description,
  image,
  authorId,
  datePosted,
  isApproved,
}) {
  const dispatch = useDispatch();
  const authorName = users.find((user) => user.id === authorId).name;
  const authorNameFormatted = authorName.charAt(0).toUpperCase() + authorName.slice(1);

  const handleApprove = (e) => {
    e.preventDefault();

    dispatch(setApprove({ id, isApproved: true }));
  };

  return (
    <div className={`news-article ${isApproved === false && 'news-article--not-approved'}`}>
      <div className="news-article__img">
        <img src={image} alt="News article" />
      </div>
      <div className="news-article__content">
        <div className="news-article__body">
          <h3 className="news-article__title">{title}</h3>
          <p className="news-article__text">{description}</p>
        </div>
        <div className="news-article__footer">
          <div className="news-article__additional-info">
            <span className="news-article__author">{authorNameFormatted}</span>
            <span className="news-article__date">{datePosted}</span>
          </div>
          {
            isApproved === false && (
              <button
                type="button"
                className="news-article__approve-button"
                onClick={handleApprove}
              >
                Одобрить
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}
NewsArticle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  datePosted: PropTypes.string.isRequired,
  isApproved: PropTypes.bool.isRequired,
};

export default NewsArticle;
