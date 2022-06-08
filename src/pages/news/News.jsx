import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/authSlice';
import { newsSelectorAll, newsSelectorApproved } from '../../redux/newsSlice';
import useDebounce from '../../hooks/useDebounce';
import { USER, ADMIN } from '../../constants';
import PageTitle from '../../components/pageTitle/PageTitle';
import AddNewsArticle from '../../components/addNews/AddNewsArticle';
import NewsArticle from '../../components/newsArticle/NewsArticle';
import './News.scss';

function News() {
  const { userType } = useSelector(authSelector);
  const news = userType === ADMIN
    ? useSelector(newsSelectorAll)
    : useSelector(newsSelectorApproved);
  const searchInputEl = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [isNotFound, setIsNotFound] = useState(false);
  const [newsResults, setNewsResults] = useState(news);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filterResult = news.filter((item) => {
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();
        const search = debouncedSearchTerm.toLowerCase();

        return title.indexOf(search) > -1 || description.indexOf(search) > -1;
      });

      if (filterResult.length === 0) setIsNotFound(true);

      setNewsResults(filterResult);
    } else {
      setIsNotFound(false);
      setNewsResults(news);
    }
  }, [debouncedSearchTerm, news]);

  const handleSearch = () => setSearchTerm(searchInputEl.current.value);

  const getNews = () => (
    newsResults.map(({
      id,
      title,
      description,
      image,
      authorId,
      datePosted,
      isApproved,
    }) => (
      <NewsArticle
        key={id}
        id={id}
        title={title}
        description={description}
        image={image}
        authorId={authorId}
        datePosted={datePosted}
        isApproved={isApproved}
      />
    )).reverse()
  );

  return (
    <section className="news">
      <PageTitle className="news__title">Новости</PageTitle>
      <input
        ref={searchInputEl}
        type="text"
        placeholder="Поиск"
        className="news__search-input"
        onChange={handleSearch}
      />
      <div className="news__list">
        {
        isNotFound
          ? (
            <span className="news__not-found-message">
              К сожалению, новости по вашему запросу не найдены :(
            </span>
          )
          : getNews()
        }
      </div>
      {
        (userType === USER || userType === ADMIN) && <AddNewsArticle />
      }
    </section>
  );
}

export default News;
