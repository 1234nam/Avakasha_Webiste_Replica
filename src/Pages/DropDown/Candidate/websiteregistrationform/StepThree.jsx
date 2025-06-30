import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebsiteRegisterForm.css';

const StepThree = () => {
  const [formData, setFormData] = useState({
    SSLCor10thboard: '',
    SSLCpercentage: '',
    t12thBoard: '',
    t12thpercentage: '',
    bachelorsdegree: '',
    college: '',
    degreespecilzation: '',
    year: '',
    cgpa: '',
    stream: '',
    masters: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = async (e) => {
    e.preventDefault();

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfGsyrlt1fg2_XtYl5w6l2Vi5RCNIQaU9ICvee8tMdKwPQYkw/formResponse';
    const formDataToSubmit = new FormData();

    // Removed emailId entry here
    formDataToSubmit.append('entry.177358240', formData.SSLCor10thboard);      // SSLC/10th board
    formDataToSubmit.append('entry.1076693317', formData.SSLCpercentage);      // 10th %
    formDataToSubmit.append('entry.387335883', formData.t12thBoard);           // 12th board
    formDataToSubmit.append('entry.1818431395', formData.t12thpercentage);     // 12th %
    formDataToSubmit.append('entry.1897829712', formData.bachelorsdegree);     // Bachelor's degree
    formDataToSubmit.append('entry.172904045', formData.college);              // College
    formDataToSubmit.append('entry.117663453', formData.degreespecilzation);   // Specialization
    formDataToSubmit.append('entry.825764531', formData.year);                 // Current year
    formDataToSubmit.append('entry.1452916936', formData.cgpa);                // CGPA
    formDataToSubmit.append('entry.351899570', formData.stream);               // Stream
    formDataToSubmit.append('entry.364111526', formData.masters);              // Master's

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit,
      });

      localStorage.setItem('stepThreeData', JSON.stringify(formData));
      navigate('/register/step-four');
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Education Details</h2>
      <form className="register-form" onSubmit={handleNext}>
        <label>SSLC or 10th board:</label>
        <div className="radio-group">
          <label><input type="radio" name="SSLCor10thboard" value="Karnataka" onChange={handleChange} checked={formData.SSLCor10thboard === 'Karnataka'} /> Karnataka state board KSEEB</label>
          <label><input type="radio" name="SSLCor10thboard" value="CBSE" onChange={handleChange} checked={formData.SSLCor10thboard === 'CBSE'} /> CBSE</label>
          <label><input type="radio" name="SSLCor10thboard" value="ICSE" onChange={handleChange} checked={formData.SSLCor10thboard === 'ICSE'} /> ICSE</label>
          <label><input type="radio" name="SSLCor10thboard" value="Other" onChange={handleChange} checked={formData.SSLCor10thboard === 'Other'} /> Other</label>
        </div>

        <label>10th Percentage:</label>
        <input name="SSLCpercentage" value={formData.SSLCpercentage} onChange={handleChange} required />

        <label>12th board:</label>
        <div className="radio-group">
          <label><input type="radio" name="t12thBoard" value="Karnataka" onChange={handleChange} checked={formData.t12thBoard === 'Karnataka'} /> Karnataka state board DPUE</label>
          <label><input type="radio" name="t12thBoard" value="CBSE" onChange={handleChange} checked={formData.t12thBoard === 'CBSE'} /> CBSE</label>
          <label><input type="radio" name="t12thBoard" value="ICSE" onChange={handleChange} checked={formData.t12thBoard === 'ICSE'} /> ICSE</label>
          <label><input type="radio" name="t12thBoard" value="Other" onChange={handleChange} checked={formData.t12thBoard === 'Other'} /> Other</label>
        </div>

        <label>12th Percentage:</label>
        <input name="t12thpercentage" value={formData.t12thpercentage} onChange={handleChange} required />

        <label>Bachelor's Degree:</label>
        <input name="bachelorsdegree" value={formData.bachelorsdegree} onChange={handleChange} required />

        <label>Name of College/University:</label>
        <input name="college" value={formData.college} onChange={handleChange} required />

        <label>Degree Specialization:</label>
        <input name="degreespecilzation" value={formData.degreespecilzation} onChange={handleChange} required />

        <label>Current Year in Degree:</label>
        <div className="radio-group">
          <label><input type="radio" name="year" value="Firstyear" onChange={handleChange} checked={formData.year === 'Firstyear'} /> First year</label>
          <label><input type="radio" name="year" value="Secondyear" onChange={handleChange} checked={formData.year === 'Secondyear'} /> Second year</label>
          <label><input type="radio" name="year" value="Thirdyear" onChange={handleChange} checked={formData.year === 'Thirdyear'} /> Third year</label>
          <label><input type="radio" name="year" value="Fourthyear" onChange={handleChange} checked={formData.year === 'Fourthyear'} /> Fourth year</label>
          <label><input type="radio" name="year" value="Graduated" onChange={handleChange} checked={formData.year === 'Graduated'} /> Graduated</label>
        </div>

        <label>Average Degree CGPA:</label>
        <input name="cgpa" value={formData.cgpa} onChange={handleChange} required />

        <label>Interested Stream in Degree:</label>
        <input name="stream" value={formData.stream} onChange={handleChange} required />

        <label>Have you done a Master's Degree?</label>
        <div className="radio-group">
          <label><input type="radio" name="masters" value="yes" onChange={handleChange} checked={formData.masters === 'yes'} /> Yes</label>
          <label><input type="radio" name="masters" value="no" onChange={handleChange} checked={formData.masters === 'no'} /> No</label>
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepThree;
