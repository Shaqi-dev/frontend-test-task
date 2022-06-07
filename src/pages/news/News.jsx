import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/authSlice';
import { newsSelector } from '../../redux/newsSlice';
import { USER, ADMIN } from '../../constants';
import PageTitle from '../../components/pageTitle/PageTitle';
import AddNewsArticle from '../../components/addNews/AddNewsArticle';
import NewsArticle from '../../components/newsArticle/NewsArticle';
import './News.scss';

function News() {
  const news = useSelector(newsSelector);
  const { userType } = useSelector(authSelector);
  return (
    <main className="news">
      <PageTitle className="news__title">Новости</PageTitle>
      <div className="news__list">
        {
          news.map((item) => (
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
