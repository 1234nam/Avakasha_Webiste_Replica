
import React from 'react';
import './GettingStarted.css';


const GettingStarted = () => {
  return (

    
    <div className="getting-started">
      <h2 className="title">Pre-Requisites Before Filling the Form</h2>

     
      <div className="step">
        <h3 className="step-title">Step 1:</h3>
        <ul>
          <li>
            Using the <strong>IntelligentCV</strong> mobile app, choose the 39th format resume and create your resume.
          </li>
          <li>This will be the official resume format.</li>
          <li>
            Link to the app:&nbsp;
            <a
              href="https://www.intelligentcv.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IntelligentCV
            </a>
          </li>
        </ul>
      </div>

      {/* Step 2 */}
      <div className="step">
        <h3 className="step-title">Step 2:</h3>
        <ul>
          <li>Create a Google Drive folder containing all educational documents and certifications.</li>
          <li>Create a shareable link, giving access to "Anyone with the link".</li>
          <li>Paste the link in the document section while filling the form.</li>
        </ul>
      </div>

      {/* Step 3 */}
      <div className="step">
        <h3 className="step-title">Step 3:</h3>
        <ul>
          <li>Download the attached Profile Document.</li>
          <li>Fill in the details as required.</li>
          <li>This Profile Document is to be uploaded along with the resume while filling the form.</li>
        </ul>
      </div>

      {/* Google Account */}
      <div className="step">
        <h3 className="step-title">Google Account:</h3>
        <ul>
          <li>Please use a Google account while entering details to save the form as you fill it out.</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="button-group">
        <a
          href="https://docs.google.com/document/d/1SCfbIk6aFNiwhO-2ZknhDA9K61bWZInp/edit?tab=t.0"
          className="btn-outline-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Profile
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScY1GM6lSKHRS0NkjJkZYUSSH03ZCFXsaDK-qBcFeIkjheKAA/viewform"
          className="btn-outline-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register in Google Forms
        </a>
        <a
          href="/register"
          className="btn-outline-blue"
        >
          Register in Website
        </a>
      </div>
    </div>
  );
};

export default GettingStarted;
