import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Join Us</h4>
      <h1 className="gradient__text">Product tracking  <br /> and traceability</h1>
      <p>Our track and trace system helps business in automating the process of collecting and recording
        important information about their products by following up on their origin and status throughout
        the supply chain. The products are assigned barcodes which are stored in a database, and they are
        tracked and traced from production to distribution and transportation. Businesses can easily
        manage and authenticate their products through the system, thus guaranteeing a transparent
        supply chain, saving costs, time and enhancing customer satisfaction experience..
      </p>
      <h4>Get Started</h4>
    </div>
  </div>
);

export default Possibility;
