import React from 'react';
import './Chero.css';
import Lotti from './Lotti';
import GettingStarted from './Gettingtarted';
import AboutCandidate from './AboutCandidate';
import Checkout from './Checkout';

const Chero = () => {
  return (
    <div className="candidate-page">
      <section className="candidate-hero">
        <h1>Candidate: Getting Started</h1>
      </section>
      <section className="candidate-lottie-section">
        <Lotti />
      </section>
      <GettingStarted />
      <AboutCandidate />
      <Checkout />
    </div>
  );
};

export default Chero;
