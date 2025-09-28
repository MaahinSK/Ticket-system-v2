import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col footer-about">
          <h2>CS — Ticket System</h2>
          <p>
           This project is developed by CS — Ticket System to manage customer support tickets efficiently. this is part of a programming hero assignment. hope you like it.
          </p>
        </div>

      
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </div>

    
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Products & Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>

       
        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>

       
        <div className="footer-col">
          <h3>Social Links</h3>
          <ul>
            <li> @CS — Ticket System</li>
            <li> @CS — Ticket System</li>
            <li> @CS — Ticket System</li>
            <li> support@cst.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
