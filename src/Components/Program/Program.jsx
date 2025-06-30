import React from 'react';
import './Program.css';
import { useNavigate } from 'react-router-dom';

const Program = () => {
  const navigate = useNavigate();
  return (
    <div className="program-container">
      {/* <h2 className="program-heading">🚀 Kickstart Your Career – Find the Right Fit!</h2>
      <h3 className="program-subheading">🔥 Core Services</h3> */}

      <div className="program-cards">
        {/* Recruiting Services Card */}
        <div className="program-card blue-card">
          <h3 className="card-title">Recruiting Services<br /><span>Get Hired Now 🚀</span></h3>
          <p className="card-text">
            Find exciting job opportunities that match your vibe and skills!
          </p>
          <button className="card-button blue-btn"
          onClick={() => navigate('/recruitmentservices')}
          >Explore Jobs</button>
        </div>

        {/* Outsourcing Services Card */}
        <div className="program-card orange-card">
          <h3 className="card-title">Outsourcing Services<br /><span>Freelance & Work Your Way 👜</span></h3>
          <p className="card-text">
            Work on your terms—freelance, side hustle, or build your dream career!
          </p>
          <button className="card-button orange-btn">Find Gigs</button>
        </div>
      </div>
    </div>
  );
};

export default Program;
