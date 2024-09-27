import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css'; 

function Footer() {
  return (
    <footer className="footer sticky-bottom navbar-light shadow-lg p-3">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>AccuTax</h2>
        </div>
        <ul className="footer-links">
          <li><Link to="/guideline">Guidelines</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          <li><Link to="/termsandconditions">Terms and Conditions</Link></li>
        </ul>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="images/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="images/twitter-x.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="images/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <img src="images/google.svg" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="images/linkedin.svg" alt="Instagram" />
          </a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} AccuTax. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
