import React from 'react';
import './Searchbar.scss';
import searchIcon from '../../assets/img/iconamoon_search-light.svg';

const Searchbar = ({ isOpen }) => {
  return (
    <>
      <div className="wrapper-bar">
        <div className={`sidebar-first ${isOpen ? 'open' : ''}`}>
          <div className="input-case">
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Search"
              className="input-field"
            />
            <div className="icon">
              <img src={searchIcon} />
            </div>
          </div>

          <ul>
            <li>
              <a href="#">On this page</a>
            </li>
            <li>
              <a href="#">Accesbility</a>
            </li>
            <li>
              <a href="#">What is Chaplean</a>
            </li>
            <li>
              <a href="#">How to use</a>
            </li>
            <li>
              <a href="#">Accesbility</a>
            </li>
            <hr />
            <li>
              <a href="#">Edit this page</a>
            </li>
            <li>
              <a href="#">Managed Chaplean</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
