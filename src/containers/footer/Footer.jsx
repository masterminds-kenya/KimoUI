import React from 'react';

import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">“Last Mile Data Source”</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Email : mulikamika@gmail.com </p>
        <p>Phone number : +254 796896384</p>
        <p>Address : 3rd Floor - Utumishi Co-Op House, Mamlaka Rd</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 KIMO. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
