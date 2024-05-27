import React, { useState } from 'react';
import './Header.scss';
import logoChaplean from '../../assets/img/logo.svg';
import burgerMenuIcon from '../../assets/img/burger-menu.svg';
import burgerCloseIcon from '../../assets/img/cross.svg';
import Sidebar from '../../components/Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  
 const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsSidebarOpen(false);
      setIsSearchbarOpen(false);
    }
  };

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      setIsOpen(false);
      setIsSearchbarOpen(false);
    }
  };

  const handleSearchbarToggle = () => {
    setIsSearchbarOpen(!isSearchbarOpen);
    if (!isSearchbarOpen) {
      setIsOpen(false);
      setIsSidebarOpen(false);
    }
  };


  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logoChaplean} alt="logo" className="navbar-logo-image" />
          </div>
          <div
            className={`burger-menu ${isOpen ? 'open' : ''}`}
            onClick={handleMenuToggle}
          >
            {isOpen ? (
              <img src={burgerCloseIcon} />
            ) : (
              <img src={burgerMenuIcon} />
            )}
          
          </div>
          {isOpen && (
            <>
              <div className="menu">
                <ul>
                  <li>What is Chaplean</li>
                  <li>Our difference</li>
                  <li>Docs</li>
                  <li>Pricing</li>
                  <li>
                    <button className="contact-us">Contact Us</button>
                  </li>
                </ul>
              </div>
            </>
          )}
          <ul className="navbar-links">
            <li>
              <a href="#what-is-chaplean">What is Chaplean</a>
            </li>
            <li>
              <a href="#our-difference">Our Difference</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#docs">Docs</a>
            </li>
            <li>
              <button className="contact-us">Contact Us</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="sub-header">
        <ul className="sub-header-list">
          <li onClick={handleMenuClick}>Menu</li>
          <li onClick={handleSearchbarToggle}>Search</li>
        </ul>
        <Sidebar isOpen={isSidebarOpen} />
        <Searchbar isOpen={isSearchbarOpen} />
      </div>
    </>
  );
};

export default Header;
