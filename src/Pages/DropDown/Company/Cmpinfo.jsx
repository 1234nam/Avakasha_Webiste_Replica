import React from 'react';
import './CmpInfo.css'; 
// import Company from '../../assets/Company.webp';
import LottiCmp from './LottiCmp'

const CmpInfo = () => {
  return (
    <div className="getting-started-cmp">
      
      <h2 className="step-title-cmp">Getting,</h2>
      
       <p>
       Hello and welcome to Avakasha. We are glad to see you here. Follow the steps below to join our network and establish a strong presence in our database.
       </p>
          
     
      <div className="step-cmp">
        <h3 className="step-title-cmp">Become Our Partner!</h3>
       <p>We are open to strategic partnerships with potential employers to benefit all stakeholders, including candidates and companies.</p>
      </div>

      <div className="step-cmp">
        <h2 className='step-title-cmp'> How to Register</h2>
        <h3 className="step-title-cmp">Step 1:</h3>
        <ul>
          <li>Use the company registration link to fill in all the necessary details of your company and its stakeholders.</li>
        </ul>
      </div>
         
      <div className="step-cmp">
        <h3 className="step-title-cmp">Step 2:</h3>
        <ul>
          <li>Use the job post form to post the available job requirements.</li>
        </ul>
      </div>

         <div className="step-cmp">
        <h3 className="step-title-cmp">Step 3:</h3>
        <ul>
          <li>We will review and match you with suitable candidates who meet the role requirements and needs of your company.</li>
          <li>Note: We will verify the qualifications of the candidates, but you may conduct your own interviews if needed.</li>
        </ul>
      </div>

            <div className="step-cmp">
        <h3 className="step-title-cmp">ContactUs</h3>
        <ul>
          <li>Drop us an email at the below mentioned email or connect with us on any social media platform for further assistance.</li>
        </ul>
      </div>


             <div className="step-cmp">
        <h3 className="step-title-cmp">GuideLine</h3>
        <ul>
          <li>Visit our Guidelines page for more information on the process and any related queries.</li>
        </ul>
      </div>


      <section className="company-lottie-section">
        <LottiCmp />
      </section>

      
     {/* <div className="illustration">
             <img src={Company} alt=" " />
           </div> */}

      {/* Action Buttons */}
      <div className="button-group-cmp">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeiPCobbGwhCbI7yPgRP5SwdIyf2hcg8MqQs0inmhkEqRjvDg/viewform"
          className="btn-outline-blue-cmp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSejlyGWf51tcgKFtg5s1uIoamzVhUuZCj-va-M4WRPh2OA6VQ/viewformg"
          className="btn-outline-blue-cmp"
          target="_blank"
          rel="noopener noreferrer"
        >
          JOB POST
        </a>
        
      </div>
    </div>
  );
};

export default CmpInfo;
