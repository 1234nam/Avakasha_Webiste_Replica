import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebsiteRegisterForm.css';

const StepSix = () => {
  const [formData, setFormData] = useState({
    yrexp: '',
    area: '',
    work: '',
    des: '',
    prv: '',
    loc: '',
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

    // Removed emailId entry
    formDataToSubmit.append('entry.480776225', formData.yrexp);
    formDataToSubmit.append('entry.1699745683', formData.area);
    formDataToSubmit.append('entry.1456168806', formData.work);
    formDataToSubmit.append('entry.622242480', formData.des);
    formDataToSubmit.append('entry.1052724682', formData.prv);
    formDataToSubmit.append('entry.2031886690', formData.loc);
    formDataToSubmit.append('entry.1609853511', formData.resume);

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit,
      });
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
    }

    localStorage.setItem('stepSixData', JSON.stringify(formData));
    navigate('/register/step-seven');
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Fill below if Experienced</h2>
      <form className="register-form" onSubmit={handleNext}>
        <label>Specify the no. of years of experience</label>
        <input name="yrexp" value={formData.yrexp} onChange={handleChange} required />

        <label>Specify the area of work</label>
        <input name="area" value={formData.area} onChange={handleChange} required />

        <label>Describe the area of work</label>
        <textarea name="work" value={formData.work} onChange={handleChange} rows={3} required />

        <label>Roles and responsibilities</label>
        <textarea name="des" value={formData.des} onChange={handleChange} rows={3} required />

        <label>Specify the nature of work done in previous job</label>
        <div className="radio-group">
          {['Internship', 'Full', 'Part', 'other'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="prv"
                value={option}
                onChange={handleChange}
                checked={formData.prv === option}
              /> {option}
            </label>
          ))}
        </div>

        <label>Previous Work location</label>
        <div className="radio-group">
          {['Remote', 'Hybrid', 'On'].map(loc => (
            <label key={loc}>
              <input
                type="radio"
                name="loc"
                value={loc}
                onChange={handleChange}
                checked={formData.loc === loc}
              /> {loc === 'On' ? 'On Site' : loc}
            </label>
          ))}
        </div>

        <label>Experienced Resume:</label>
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

export default StepSix;
