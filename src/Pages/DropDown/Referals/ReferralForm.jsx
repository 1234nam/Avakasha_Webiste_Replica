import React from 'react';
import './ReferralForm.css';

const ReferralForm = () => {
  return (
    <div className="referral-form-container">
      <h2 className="referral-heading">Please fill the below form and we will contact you!</h2>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSczJOQPJHe5jO3OjITBpu_umMahBBqXpEU-dp48ZCnmAbmm3w/viewform"
        width="100%"
        height="1200"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Referral Form"
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ReferralForm;
