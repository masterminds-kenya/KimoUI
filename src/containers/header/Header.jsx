import React from 'react';
import data from '../../assets/data.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> KIMO</h1>
      <p>KIMO is a big data company, focused on helping businesses across the globe to turn data into their
        greatest asset for better decision making. We provide a range of modern solutions to address the
        problem of last mile data sourcing for our customers across a broad range of industries through our
        deep expertise. At KIMO, we transform how businesses work through the power of data and pride
        ourselves in being the most trusted data insights platform for fueling brand growth.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={data} />
    </div>
  </div>
);

export default Header;
