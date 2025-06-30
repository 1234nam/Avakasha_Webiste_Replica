import React from 'react';
import './AboutCandidate.css';
import Cycle from '../../../assets/Cycle.png'; 
import Traning from '../../../assets/Traning.png';

const AboutCandidate = () => {
  return (
    <section className="about-candidate">
      <p className="update-note">Further updates will be sent via Mail</p>

      <h2 className="section-title-c">Things to know about us!</h2>

      {/* First section - Image Right */}
      <div className="section-row image-right">
        <div className="text-block">
          <h3 className="subheading">We strive for Continuous Improvement</h3>
          <p className="description">
            Our approach to improvement is visually represented in the image.
            Each step holds its own significance, and when applied effectively,
            it can create a meaningful impact on people's lives!
          </p>
        </div>
        <div className="image-block">
          <img src={Cycle} alt="Continuous Improvement Cycle" />
        </div>
      </div>

      {/* Second section - Image Left */}
      <div className="section-row image-left">
        <div className="image-block">
          <img src={Traning} alt="Our Evaluation Mechanism" />
        </div>
        <div className="text-block">
          <h3 className="subheading">Our Evaluation Mechanism</h3>
          <p className="evaluation-text">
            We assess candidates beyond just their knowledge and technical skills—
            we also evaluate their soft skills, such as communication, dedication,
            and professionalism. This helps us identify individuals who are truly
            committed to their career and personal growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCandidate;

