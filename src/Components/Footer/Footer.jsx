// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: For Clients */}
        <div className="footer-column">
          <h3>For Clients</h3>
          <ul>
            <li>Guidelines for Internship</li>
            <li>Guideline for Apprenticeship</li>
            <li>Hiring Options</li>
          </ul>
        </div>

        {/* Section 2: For Talents */}
        <div className="footer-column">
          <h3>For Talents</h3>
          <ul>
            <li>Training Sites</li>
            <li>Referrals</li>
          </ul>
        </div>

        {/* Section 3: Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Recruiting Services</li>
          </ul>
        </div>

        {/* Section 4: Resources */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>FAQ</li>
            <li>Data Policy</li>
          </ul>
        </div>

        {/* Section 5: Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Posts</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="socials">
          <span>LinkedIn</span> | <span>Instagram</span> | <span>Facebook</span>
        </div>
        <p>Email: connect@avakasha.in & avakasha.2023@gmail.com</p>
        <p>Designed and Deployed in Bengaluru, Karnataka 💛❤️</p>
        <p>© 2022 - 2025 Avakasha Recruiting Services</p>
        <p>Website Version 5.2</p>
      </div>
    </footer>
  );
};

export default Footer;
