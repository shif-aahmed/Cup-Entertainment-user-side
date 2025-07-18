import React from 'react';
import SideBar from '../../components/SideBar/SideBar.jsx';
import HeroSlider from '../../components/HeroSlider/HeroSlider.jsx';
import Grid from '../../components/Grid/Grid.jsx';
import Footer2 from '../../components/Footer2/Footer2.jsx';
import './UserHomePage.css';

function UserHome() {
  return (
    <div className="home-container">
      <SideBar />
      <div className="content-wrapper">
        <div className="main-content">
          <HeroSlider />
          <Grid />
        </div>
        <Footer2 />
      </div>
    </div>
  );
}

export default UserHome;
