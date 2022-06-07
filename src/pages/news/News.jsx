import React from 'react';
import PageTitle from '../../components/pageTitle/PageTitle';
import NewsArticle from '../../components/newsArticle/NewsArticle';
import './News.scss';

function News() {
  return (
    <main className="news">
      <PageTitle className="news__title">Новости</PageTitle>
      <div className="news__list">
        <NewsArticle
          title="Суперкомпьютер из США Frontier вышиб «японца» Fugaku с первого места"
          description="Первая тройка стран-владельцев чемпионских суперкомпьютеров в свежайшем рейтинге выглядит так: США, Япония, Финляндия."
          image="https://www.it-world.ru/upload/iblock/eaa/resize_700_467_7ottrwbvllkgkgbrohatercu6ry05dbc_s.webp"
          authorId={1}
          datePosted="31.05.2022"
        />
        <NewsArticle
          title="Sony выходит в космос"
          description="Sony Corporation of America создала дочернюю компанию Sony Space Communications Corporation, которая займется разработкой устройств, позволяющих спутн..."
          image="https://www.it-world.ru/upload/iblock/d87/resize_700_467_p7wi9a7ieisawhfs1vqoinofydwofa1f_s.webp"
          authorId={0}
          datePosted="07.06.2022"
        />
        <NewsArticle
          title="Гендиректор Ford: грядет эра недорогих электромобилей"
          description="Джим Фарли считает, что на рынке электромобилей начнется ценовая война, когда появятся новые модели стоимостью $25 000."
          image="https://www.it-world.ru/upload/iblock/8f5/resize_700_467_37nid0xbppiu0hgyrjt6lvf6w9jn38sb_s.webp"
          authorId={0}
          datePosted="02.06.2022"
        />
        <NewsArticle
          title="Илон Маск: прототип робота Optimus будет готов к 30 сентября"
          description="Человекообразный робот от Tesla будет построен из тех же комплектующих, что и электромобиль компании."
          image="https://www.it-world.ru/upload/iblock/618/resize_700_467_eot1ha8twxyds8ohr0z0b1llzwrh9j0g_s.webp"
          authorId={1}
          datePosted="04.06.2022"
        />
      </div>
    </main>
  );
}

export default News;
