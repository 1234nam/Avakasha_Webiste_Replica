import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebsiteRegisterForm.css';

const StepTwo = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    location: '',
    dob: '',
    gender: '',
    linkedin: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = async (e) => {
    e.preventDefault();

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfGsyrlt1fg2_XtYl5w6l2Vi5RCNIQaU9ICvee8tMdKwPQYkw/formResponse';
    const formDataToSubmit = new FormData();

    // Append only form fields, no emailId
    formDataToSubmit.append('entry.811049858', formData.fullName);    // Full Name
    formDataToSubmit.append('entry.879109197', formData.phone);       // Phone
    formDataToSubmit.append('entry.1147976333', formData.address);    // Address
    formDataToSubmit.append('entry.1901065279', formData.location);   // Location
    formDataToSubmit.append('entry.1452008137', formData.dob);        // DOB
    formDataToSubmit.append('entry.1588550730', formData.gender);     // Gender
    formDataToSubmit.append('entry.1275384933', formData.linkedin);   // LinkedIn URL

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit,
      });

      localStorage.setItem('stepTwoData', JSON.stringify(formData));
      navigate('/register/step-three');
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Your Details</h2>
      <form className="register-form" onSubmit={handleNext}>
        <label>Full Name:</label>
        <input name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Address:</label>
        <input name="address" value={formData.address} onChange={handleChange} required />

        <label>Location:</label>
        <input name="location" value={formData.location} onChange={handleChange} required />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Gender:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === 'Male'}
            /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === 'Female'}
            /> Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
              checked={formData.gender === 'Other'}
            /> Other
          </label>
        </div>

        <label>LinkedIn Profile Link:</label>
        <input
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourprofile"
        />

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepTwo;
