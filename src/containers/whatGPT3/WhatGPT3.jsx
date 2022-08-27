import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title=""
        text="With the data insights industry lacking in global supply of quality, KIMO have curved a niche for
      ourselves as the go to experts’ in providing the following services our esteemed clients."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">OUR SERVICES </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Data collection "
        text="We have a proven track record of collecting accurate and high quality data for our last mile clients
      and partners that helps them in making data driven decisions to improve their business. From
      unearthing respondents whose feedback provides actionable insights through our well-structured
      surveys, we are keen on solving the pain of data sourcing with utmost efficiency. We provide an end
      to end management of the data collection processes through our highly skilled fieldwork specialists
      to ensure to guarantee excellence. ."
      />
      <Feature
        title="Industry Mapping "
        text="As a powerful tool that gives businesses a strategic grasp of the competitive terrain, we provide
      organizations with the intelligence required to streamline their operations, enter new markets,
      identify skills gaps and recruit outstanding executives. From location, human resource
      management, supply chain, production process, budget estimates and management details our
      analyses are in-depth."
      />
      <Feature
        title="Research support solutions"
        text="With years of experience in conducting market research fieldwork our dedicated researchers work
      closely industry leaders and in house consultants to develop comprehensive and compelling
      reports research support solutions. These include:
      • Survey programming: We leverage on technology to help business generate user-friendly
      surveys with questions that engage the respondents and draw out meaningful answers.
      • Data processing: We use the most advanced statistical tools to help organizations generate
      meaningful insights from their data.
      • Report & analysis: We provide high level summaries of the findings from processed data
      data through dashboard visualization and words to communicate to the business owners
      • Translation and localization: We ensure that our clients who have diverse backgrounds
      receive"
      />
    </div>
  </div>
);

export default WhatGPT3;
