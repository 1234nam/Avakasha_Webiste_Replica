import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebsiteRegisterForm.css';

const StepFour = () => {
  const [formData, setFormData] = useState({
    experience: '',
    skills: '',
    certificates: ''
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

    // Removed emailId from submission
    formDataToSubmit.append('entry.231893032', formData.experience);  // Experience
    formDataToSubmit.append('entry.2057029711', formData.skills);     // Skills
    formDataToSubmit.append('entry.307259300', formData.certificates); // Certificates

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit,
      });

      // Store form data only, no emailId
      localStorage.setItem('stepFourData', JSON.stringify(formData));
      navigate('/register/step-five');
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Work Related Details</h2>
      <form className="register-form" onSubmit={handleNext}>
        <label>Candidate Work Experience</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="experience"
              value="noexp"
              onChange={handleChange}
              checked={formData.experience === 'noexp'}
            /> No experience
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="begnr"
              onChange={handleChange}
              checked={formData.experience === 'begnr'}
            /> Beginner / Internship experience
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="exp"
              onChange={handleChange}
              checked={formData.experience === 'exp'}
            /> Experienced
          </label>
        </div>

        <label>
          What skills do you possess<br />
          (Separate by commas or newline)
        </label>
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
          rows={5}
          placeholder="E.g. C, Python, Excel, Arduino, Blog writing..."
        />

        <label>
          Certifications list<br />
          (Separate by commas or newline)
        </label>
        <textarea
          name="certificates"
          value={formData.certificates}
          onChange={handleChange}
          required
          rows={4}
          placeholder="E.g. AWS Certified Solutions Architect, Cisco CCNA..."
        />

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepFour;
