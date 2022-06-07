import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/authSlice';
import { newsSelector } from '../../redux/newsSlice';
import useDebounce from '../../hooks/useDebounce';
import { USER, ADMIN } from '../../constants';
import PageTitle from '../../components/pageTitle/PageTitle';
import AddNewsArticle from '../../components/addNews/AddNewsArticle';
import NewsArticle from '../../components/newsArticle/NewsArticle';
import './News.scss';

function News() {
  const news = useSelector(newsSelector);
  const { userType } = useSelector(authSelector);
  const searchInputEl = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');
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

      setNewsResults(filterResult);
    } else {
      setNewsResults(news);
    }
  }, [debouncedSearchTerm]);

  const handleSearch = () => setSearchTerm(searchInputEl.current.value);

  return (
    <main className="news">
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
          newsResults.map((item) => (
            <NewsArticle
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              authorId={item.authorId}
              datePosted={item.datePosted}
            />
          )).reverse()
        }
      </div>
      {
        (userType === USER || userType === ADMIN) && <AddNewsArticle />
      }
    </main>
  );
}

export default News;
