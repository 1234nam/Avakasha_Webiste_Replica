

import React from 'react';
import './Trusted.css';

const Trusted = () => {
  return (
    <div className="trusted-section">
      <h2 className="trusted-title">Trusted By</h2>
      <div className="trusted-slider">
        <div className="trusted-item">
          <div className="trusted-label fancy-text">Company</div>
          <div className="trusted-subtext">Company</div>
        </div>
        <div className="trusted-item">
          <div className="trusted-label fancy-text">University</div>
          <div className="trusted-subtext">University</div>
        </div>
        <div className="trusted-item">
          <div className="trusted-label fancy-text">Institution</div>
          <div className="trusted-subtext">Institution</div>
        </div>
        <div className="trusted-item">
          <div className="trusted-label fancy-text">Placement Cell</div>
          <div className="trusted-subtext">Placement Cell</div>
        </div>
        <div className="trusted-item">
          <div className="trusted-label fancy-text">Training Hub</div>
          <div className="trusted-subtext">Training Hub</div>
        </div>
        <div className="trusted-item">
          <div className="trusted-label fancy-text">Educational Platforms</div>
          <div className="trusted-subtext">Educational Platforms</div>
        </div>
        <div className="trusted-item">
          <div className="trusted-label fancy-text">Social Networking Sites</div>
          <div className="trusted-subtext">Social Networking Sites</div>
        </div>
      </div>
      <p className="trusted-note">and many more to come..</p>
    </div>
  );
};

export default Trusted;
