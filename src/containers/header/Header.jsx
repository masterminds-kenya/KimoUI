import React from 'react';
import people from '../../assets/people.png';
import data from '../../assets/data.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Build with OpenAI</h1>
      <p>kimo is a big data tool that is owned and operated by Oxford Aptitude Limited – A data science company We collect ,analyze, and deliver last mile data to our clients and partners.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,000 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={data} />
    </div>
  </div>
);

export default Header;
