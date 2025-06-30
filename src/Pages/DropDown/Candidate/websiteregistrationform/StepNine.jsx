import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebsiteRegisterForm.css';

const StepNine = () => {
  const [formData, setFormData] = useState({
    sub: '',
    yess: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = async (e) => {
    e.preventDefault();

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfGsyrlt1fg2_XtYl5w6l2Vi5RCNIQaU9ICvee8tMdKwPQYkw/formResponse';

    const formDataToSubmit = new URLSearchParams();
    // Email field removed here
    formDataToSubmit.append('entry.934912669', formData.sub);   // Consent to share profile
    formDataToSubmit.append('entry.1366333367', formData.yess);  // Permission to store/manage data

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString(),
      });
    } catch (error) {
      console.error('Google Form submission failed:', error);
    }

    // Store locally without emailId
    localStorage.setItem('stepNineData', JSON.stringify(formData));

    alert('✅ Form submitted successfully!');
    navigate('/');
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Consent</h2>
      <form className="register-form" onSubmit={handleNext}>

        <label>
          Can we share your profile with potential employers?
          <br />
          <span className="note">
            By submitting this form, you explicitly agree to share your profile, including your work experience, skills, and other details, with potential employers. This means your profile can be used to find job matches and for recruitment purposes.
          </span>
        </label>
        <input
          type="text"
          name="sub"
          placeholder="Yes / No"
          value={formData.sub}
          onChange={handleChange}
          required
        />

        <label>
          Do we have permission to store and manage your data?
          <br />
          <span className="note">
            By selecting "Yes", you agree to our Terms & Conditions and confirm that you have read our Privacy Policy. Your data will be stored and used solely for the intended purposes.
          </span>
        </label>
        <input
          type="text"
          name="yess"
          placeholder="Yes / No"
          value={formData.yess}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StepNine;
