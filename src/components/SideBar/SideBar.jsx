import React, { useState } from 'react';
import './SideBar.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="layout d-flex">
      <div className={`sidebar ${isOpen ? '' : 'closed'} d-flex flex-column justify-content-between`}>
        <div className="top">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="logo img-fluid mb-3"
          />
          <a href="/" className="d-flex align-items-center gap-2">
            <i className="ri-home-8-line"></i> <span>Home</span>
          </a>
          <a href="#" className="d-flex align-items-center gap-2">
            <i className="ri-tv-2-fill"></i> <span>Live</span>
          </a>
          <a href="#" className="d-flex align-items-center gap-2">
            <i className="ri-play-circle-fill"></i> <span>Resume</span>
          </a>
          <a href="#" className="d-flex align-items-center gap-2">
            <i className="ri-heart-add-2-fill"></i> <span>Favourite</span>
          </a>
        </div>

        <div className="bottom">
          <button
            className="btn btn-outline-light m-2 arrow-btn"
            onClick={toggleSidebar}
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
          <a href="#" className="d-flex align-items-center gap-2">
            <i className="ri-search-line"></i> <span>Search</span>
          </a>
          <a href="#" className="d-flex align-items-center gap-2">
            <i className="ri-user-line"></i> <span>Username</span>
          </a>
          <a href="#" className="d-flex align-items-center gap-2">
            <i className="ri-settings-5-line"></i> <span>Setting</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

