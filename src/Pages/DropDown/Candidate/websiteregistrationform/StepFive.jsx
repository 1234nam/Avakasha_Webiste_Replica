import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebsiteRegisterForm.css';

const StepFive = () => {
  const [formData, setFormData] = useState({
    dtype: '',
    domain: '',
    resume: ''
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

    // Removed emailId, so no entry.1578108788 submission
    formDataToSubmit.append('entry.995385811', formData.dtype);
    formDataToSubmit.append('entry.1834521854', formData.domain);
    formDataToSubmit.append('entry.973224365', formData.resume);

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit,
      });
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
    }

    localStorage.setItem('stepFiveData', JSON.stringify(formData));
    navigate('/register/step-six');
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Fill below if Fresher</h2>
      <form className="register-form" onSubmit={handleNext}>
        <label>Specify the interested domain type</label>
        <div className="radio-group">
          {['Research', 'Marketing', 'Software', 'Hardware', 'Sales', 'Finance', 'Manufacturing', 'Management', 'Transport', 'Other'].map((item) => (
            <label key={item}>
              <input
                type="radio"
                name="dtype"
                value={item}
                onChange={handleChange}
                checked={formData.dtype === item}
              />{' '}
              {item}
            </label>
          ))}
        </div>

        <label>Specify the actual interested domain</label>
        <input name="domain" value={formData.domain} onChange={handleChange} required />

        <label>Resume (Google Drive Link):</label>
        <input
          type="url"
          name="resume"
          value={formData.resume}
          onChange={handleChange}
          placeholder="https://drive.google.com/..."
          required
        />
        <small className="note">
          Only PDF or DOCX format accepted. Upload to Google Drive and paste link here.
        </small>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepFive;
