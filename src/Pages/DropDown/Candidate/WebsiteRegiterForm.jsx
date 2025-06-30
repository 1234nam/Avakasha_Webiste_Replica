import React, { useState } from 'react';
import './WebsiteRegisterForm.css';

const WebsiteRegisterForm = () => {
  const [emailId, setEmailId] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', emailId);

    setShowPopup(true);
    setEmailId('');

    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="register-container">
      {/* -------- Instructions -------- */}
      <div className="form-instructions">
        <h3>Candidates On-boarding Registration</h3>

        <p><strong>Before You Begin:</strong></p>
        <ol>
          <li>Please ensure all prerequisites are ready, as outlined on our website.</li>
          <li>This form will take approximately 15 minutes to complete.</li>
          <li>The form consists of 10 sections, each essential for finding the best match for you.</li>
        </ol>

        <p><strong>Required Documents:</strong></p>
        <p>Please have all necessary documents prepared and stored in Google Drive, as mentioned on the registration page.</p>

        <p><strong>Google Account:</strong></p>
        <p>Please use a Google account while entering details to save the form as you fill it out.</p>

        <p>
          Just apply and stay relaxed — we have something great for you. The application process is very simple.
          Visit us here:{" "}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Official Site</a> |{" "}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>

        <hr />
      </div>

      {/* -------- Email Field Only -------- */}
      {/* <h2 className="form-title">Enter Your Email ID</h2> */}
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Email ID:</label>
        <input
          type="email"
          name="emailId"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {showPopup && <div className="popup-message">✅ Email submitted successfully!</div>}
    </div>
  );
};

export default WebsiteRegisterForm;
