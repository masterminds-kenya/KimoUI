import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="KIMO" text="We focus in gathering and generatig cutting edge customer base solutions ." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Focus on Core Business </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Machine Learning  " text="We  make use of moderm  deep learning algorithms for data  procesing ." />
      <Feature title="Blockchain " text="We adopted a decetralized  nature, all infomation is stored on chain" />
      <Feature title="Customer based" text="We focus on your brand and customers" />
    </div>
  </div>
);

export default WhatGPT3;
