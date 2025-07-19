import React from 'react';
import SideBar from '../../components/SideBar/SideBar.jsx';
import HeroSlider from '../../components/HeroSlider/HeroSlider.jsx';
import MovieGrid from '../../components/MovieGrid/MovieGrid.jsx';
import MovieFooter from '../../components/MovieFooter/MovieFooter.jsx';
import './MovieHomePage.css';

function MovieHome() {
  return (
    <div className="home-container">
      <SideBar />
      <div className="content-wrapper">
        <div className="main-content">
          <HeroSlider />
          <MovieGrid />
        </div>
        <MovieFooter />
      </div>
    </div>
  );
}

export default MovieHome;
