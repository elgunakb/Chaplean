import React from 'react';
import './Footer.scss';
import logoChaplean from '../../assets/img/logo.svg';
import downloadIcon from '../../assets/img/download-svgrepo-com 1.svg';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="logo">
            <img src={logoChaplean} alt="Chaplean Logo" />
            <ul className="footer-links">
              <li>
                <a href="#whatis">What is Chaplean</a>
              </li>
              <li>
                <a href="#difference">Our Difference</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#docs">Docs</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="download-button">
            <button>
              <img src={downloadIcon} />
              Download
            </button>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <a href="#privacy">Privacy & Policy - Cookies</a>
      </div>
    </>
  );
};

export default Footer;
