import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Sector Agnostic',
    text: ' Our deep expertise stems from unparalleled coverage of almost all the  sectors to cater for our diversified pool of clients in need of data insights',
  },
  {
    title: 'Guaranteed quality',
    text: 'We aspire to see your business make the most out of our data collection analysis and reporting processes. Our team of expertise employ the latest tools and methodologies to help achieve this..',
  },
  {
    title: 'Reliability',
    text: ': With our well trained data enumerators spread across the world and technology resources at our disposal, our turnaround on projects is shortened which means we are able to deliver quality work on time.',
  },
  {
    title: 'Affordability',
    text: ' We have bundled our different services into packages that priced as per the  scope of work, to encourage all types of businesses in making data driven decisions for their  growth.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">WHY WORK WITH US?.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
