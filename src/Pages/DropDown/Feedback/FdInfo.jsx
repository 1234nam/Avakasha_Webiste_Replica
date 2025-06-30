import React from 'react';
import './FdInfo.css';

const FdInfo = () => {
  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Making us Better!</h1>
      <p className="feedback-subtext">
        Please provide your feedback, this form is completely anonymous
      </p>
      <div className="form-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfg6AXrbi7DosqNvWKIVSOrD6ac3Pa9aTtDGfShMRdVGFTEmw/viewform?embedded=true"
          width="100%"
          height="1000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Feedback Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default FdInfo;
