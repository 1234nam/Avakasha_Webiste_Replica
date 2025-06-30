import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebsiteRegisterForm.css';

const StepSeven = () => {
  const [formData, setFormData] = useState({
    wrktyp: '',
    wrkloc: '',
    wrkpre: '',
    role: '',
    join: '',
    doc: '',
    reflink: ''
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
    // Removed email entry here
    formDataToSubmit.append('entry.1436417135', formData.wrktyp);  // Work Type Required
    formDataToSubmit.append('entry.272750874', formData.wrkloc);  // Work Location type preferred
    formDataToSubmit.append('entry.1082444224', formData.wrkpre);  // Location Preference for work
    formDataToSubmit.append('entry.1120738500', formData.role);    // Roles and responsibilities
    formDataToSubmit.append('entry.766274732', formData.join);     // When ready to join
    formDataToSubmit.append('entry.216120132', formData.doc);      // Drive link with docs
    formDataToSubmit.append('entry.216120132', formData.reflink);  // Reference Document Link

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formDataToSubmit.toString()
      });
    } catch (error) {
      console.error('Google Form submission failed:', error);
    }

    // Store locally without emailId
    localStorage.setItem('stepSevenData', JSON.stringify(formData));
    navigate('/register/step-eight');
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Looking For</h2>
      <form className="register-form" onSubmit={handleNext}>
        <label>Work Type Required</label>
        <input
          name="wrktyp"
          value={formData.wrktyp}
          onChange={handleChange}
          required
        />

        <label>Work Location type preferred</label>
        <input
          name="wrkloc"
          value={formData.wrkloc}
          onChange={handleChange}
          required
        />

        <label>Location Preference for work</label>
        <input
          name="wrkpre"
          value={formData.wrkpre}
          onChange={handleChange}
          required
        />

        <label>Roles and responsibilities</label>
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <label>When are you ready to join</label>
        <input
          name="join"
          value={formData.join}
          onChange={handleChange}
          required
        />

        <label>
          Upload the drive link* <br />
          Upload the drive link containing all educational docs, certificates, along with resume.<br />
          Add all scanned marks card, degree certificate, resume, course certificates, profile doc, in a new folder and paste the shared link.<br />
          The access to the folder should be "public: people having link".<br />
          Folder name = "CandidateName_Docs"<br />
          Document name = "candidateName_docsName.pdf"<br />
          <strong>Note:</strong> Please don't include govt documents like Aadhaar, PAN, bank passbook, etc.<br />
          Please share the folder!
        </label>
        <input
          name="doc"
          value={formData.doc}
          onChange={handleChange}
          required
        />

        <label>Reference Document Link (Google Docs):</label>
        <p className="reference-link">
          <a
            href="https://docs.google.com/document/d/1SCfbIk6aFNiwhO-2ZknhDA9K61bWZInp/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.google.com/document/d/1SCfbIk6aFNiwhO-2ZknhDA9K61bWZInp/edit?tab=t.0
          </a>
        </p>

        <input
          type="url"
          name="reflink"
          value={formData.reflink}
          onChange={handleChange}
          placeholder="Enter your own Google Docs link if different"
          required
        />
        <small className="note">
          If you have your own reference, replace the pre-filled one above.
        </small>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepSeven;
