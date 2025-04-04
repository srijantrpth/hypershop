import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        

        <div className="contact-content">
          <Link to="/"> 24BAI70081 - Srijan Tripathi </Link>
          <Link to="/"> 24BAI70427 - Aryan Saini </Link>
          <Link to="/"> 24BAI70356 - Abhinav Kumar Prasad </Link>
          <Link to="/"> 24BAI70204 - Nitin Sharma </Link>
        </div>

        

        
      </div>

      
      <div class="last">
        <p>EDT Final Project</p>
      </div>
    </div>
  );
}

export default Footer;