import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebsiteRegisterForm.css';

const StepEight = () => {
  // State to track checkbox values
  const [checks, setChecks] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
    followedLinkedIn: false,
    followedInstagram: false,
    followedFacebook: false,
  });

  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setChecks((prev) => ({ ...prev, [name]: checked }));
  };

  const handleNext = async (e) => {
    e.preventDefault();

    // Prepare data for Google Form submission
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfGsyrlt1fg2_XtYl5w6l2Vi5RCNIQaU9ICvee8tMdKwPQYkw/formResponse';

    const formDataToSubmit = new URLSearchParams();

    // Removed emailId submission

    // Append each checkbox value as "Yes" or "No"
    formDataToSubmit.append('entry.931487063', checks.check1 ? 'Yes' : 'No');
    formDataToSubmit.append('entry.931487063', checks.check2 ? 'Yes' : 'No');
    formDataToSubmit.append('entry.931487063', checks.check3 ? 'Yes' : 'No');
    formDataToSubmit.append('entry.931487063', checks.check4 ? 'Yes' : 'No');
    formDataToSubmit.append('entry.931487063', checks.check5 ? 'Yes' : 'No');
    formDataToSubmit.append('entry.931487063', checks.check6 ? 'Yes' : 'No');
    formDataToSubmit.append('entry.931487063', checks.check7 ? 'Yes' : 'No');

    formDataToSubmit.append('entry.1235425278', checks.followedLinkedIn ? 'Yes' : 'No');
    formDataToSubmit.append('entry.1235425278', checks.followedInstagram ? 'Yes' : 'No');
    formDataToSubmit.append('entry.1235425278', checks.followedFacebook ? 'Yes' : 'No');

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',  // Required for Google Forms submission from client
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString(),
      });
    } catch (error) {
      console.error('Google Form submission failed:', error);
    }

    // Save locally (optional) without emailId
    localStorage.setItem('stepEightData', JSON.stringify(checks));

    navigate('/register/step-nine');
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Cross Check</h2>
      <form className="register-form" onSubmit={handleNext}>

        <h3 className="section-title">📋 Cross Check</h3>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="check1"
              checked={checks.check1}
              onChange={handleCheckboxChange}
              required
            /> Create Google Drive folder with public access
          </label>
          <label>
            <input
              type="checkbox"
              name="check2"
              checked={checks.check2}
              onChange={handleCheckboxChange}
              required
            /> Add 10th, 12th Marks card to drive
          </label>
          <label>
            <input
              type="checkbox"
              name="check3"
              checked={checks.check3}
              onChange={handleCheckboxChange}
              required
            /> Add all semesters Degree marks card as single PDF
          </label>
          <label>
            <input
              type="checkbox"
              name="check4"
              checked={checks.check4}
              onChange={handleCheckboxChange}
              required
            /> Add Degree completion certificate OR Provisional Degree Certificate
          </label>
          <label>
            <input
              type="checkbox"
              name="check5"
              checked={checks.check5}
              onChange={handleCheckboxChange}
              required
            /> Add Resume PDF and Profile document
          </label>
          <label>
            <input
              type="checkbox"
              name="check6"
              checked={checks.check6}
              onChange={handleCheckboxChange}
              required
            /> Course Certificates
          </label>
          <label>
            <input
              type="checkbox"
              name="check7"
              checked={checks.check7}
              onChange={handleCheckboxChange}
              required
            /> No Govt ID or Bank details added
          </label>
        </div>

        <h3 className="section-title">📱 Have you followed us on social media platforms?</h3>
        <ul className="social-links">
          <li>
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/company/avakasha" target="_blank" rel="noopener noreferrer">
              linkedin.com/company/avakasha
            </a>
            <label>
              <input
                type="checkbox"
                name="followedLinkedIn"
                checked={checks.followedLinkedIn}
                onChange={handleCheckboxChange}
                required
              /> Followed
            </label>
          </li>
          <li>
            <strong>Instagram:</strong>
            <a href="https://www.instagram.com/avakasha.2023/?hl=en" target="_blank" rel="noopener noreferrer">
              instagram.com/avakasha.2023
            </a>
            <label>
              <input
                type="checkbox"
                name="followedInstagram"
                checked={checks.followedInstagram}
                onChange={handleCheckboxChange}
                required
              /> Followed
            </label>
          </li>
          <li>
            <strong>Facebook:</strong>
            <a href="https://www.facebook.com/avakasha.2023" target="_blank" rel="noopener noreferrer">
              facebook.com/avakasha.2023
            </a>
            <label>
              <input
                type="checkbox"
                name="followedFacebook"
                checked={checks.followedFacebook}
                onChange={handleCheckboxChange}
                required
              /> Followed
            </label>
          </li>
        </ul>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepEight;
