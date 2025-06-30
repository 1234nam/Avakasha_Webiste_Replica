import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebsiteRegisterForm.css';

const StepOne = () => {
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfGsyrlt1fg2_XtYl5w6l2Vi5RCNIQaU9ICvee8tMdKwPQYkw/formResponse'; // 🔁 Replace with your actual form action URL
    const formData = new FormData();
    formData.append('entry.1578108788', emailId); // 🔁 Replace with actual entry ID of your email field

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      localStorage.setItem('emailId', emailId);
      navigate('/register/step-two');
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="form-instructions">
        <h3>Candidates On-boarding Registration</h3>
        <p><strong>Before You Begin:</strong></p>
        <ol>
          <li>Prepare all documents as listed on our site.</li>
          <li>This form takes ~15 minutes.</li>
          <li>Use a Google account for better tracking.</li>
        </ol>
        <p>
          Visit us on:{" "}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Website</a>
        </p>
        <hr />
      </div>

      <h2 className="form-title">Enter Your Email ID</h2>
      <form className="register-form" onSubmit={handleNext}>
        <label>Email ID:</label>
        <input
          type="email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepOne;
