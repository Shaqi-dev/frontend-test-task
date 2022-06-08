import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import News from './pages/news';
import NotFound from './pages/notFound';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
