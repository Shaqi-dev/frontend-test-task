import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/slices/authSlice';
import PageTitle from '../../components/pageTitle/PageTitle';
import './Home.scss';

function Home() {
  const { isLoggedIn, userName } = useSelector(
    authSelector,
  );

  return (
    <main className="home">
      <PageTitle className="home__title">
        {
          `Привет, ${isLoggedIn ? userName.charAt(0).toUpperCase() + userName.slice(1) : 'Гость'}!`
        }
      </PageTitle>
    </main>
  );
}

export default Home;
