import React from 'react';
import './Sidebar.scss';
import userIcon from '../../assets/img/Rectangle 213.svg';
import arrowIcon from '../../assets/img/back.svg';
import rightArrowIcon from '../../assets/img/arrow-styles.svg';

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <div className="wrapper">
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="app-button">
            <div className="icon-container">
              <img src={userIcon} className="user-icon" />
            </div>
            <div className="text-container">
              <div className="app-name">Chaplean App</div>
              <div className="app-description">Social media platform</div>
            </div>
            <div className="dropdown-icon">
              <img src={arrowIcon} className="arrow-icon" />
            </div>
          </div>
          <ul>
            <li className="menu-title">
              <a href="#">Getting Started</a>
            </li>
            <li>
              <a href="#">Installation</a>
            </li>
            <li>
              <a href="#">Project Structure</a>
            </li>
            <li className="menu-title">
              <a href="#">Building Your Application</a>
            </li>
            <li className="arrow-menu">
              <a href="#">Routing</a>
              <img src={rightArrowIcon} className="user-icon" />
            </li>
            <li className="arrow-menu">
              <a href="#">Data Fetching</a>
              <img src={rightArrowIcon} className="user-icon" />
            </li>
            <li className="arrow-menu">
              <a href="#">Rendering</a>
              <img src={rightArrowIcon} className="user-icon" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
