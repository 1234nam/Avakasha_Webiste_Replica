import React from 'react'
import './AprenInfo.css'

const AprenInfo = () => {
  return (
     <div className="tsinfo-container">
         {/* How to Train Section */}
      <div className="train-section">
        <h2 className="train-title">Guideline for apprenticeship</h2>
        <p className="train-subtext">
          Let’s expand upon the guidelines for apprenticeship and include additional relevant points:
        </p>

        <ol className="train-list">
          <li>
            <strong>Eligibility Criteria:</strong><br />
            <ul>
                <li>To become an apprentice, candidates must be 18 years or older.</li>
            <li>They should have a genuine interest in learning and gaining practical experience in a specific field.</li>
            </ul>
            </li>

             <li>
            <strong>Eligibility Criteria:</strong><br />
            <ul>
                <li>To become an apprentice, candidates must be 18 years or older.</li>
            <li>They should have a genuine interest in learning and gaining practical experience in a specific field.</li>
            </ul>
            </li>

             <li>
            <strong>Registration Process::</strong><br />
            <ul>
                <li>Candidates need to register themselves on the National Apprenticeship Training Scheme (NATS) portal, which is managed by the Government of India. The portal link is here. https://nats.education.gov.in/ </li>
            <li>During registration, candidates provide their details, educational qualifications, and preferences for apprenticeship roles.</li>
            </ul>
            </li>

             <li>
            <strong>Company Registration:</strong><br />
            <ul>
                <li>Companies interested in hiring apprentices should also register on the national apprenticeship portal as an establishment.</li>
            <li>Completing the company profile ensures that they are eligible to engage apprentices.</li>
            </ul>
            </li>

             <li>
            <strong>Matching Candidates and Companies:</strong><br />
            <ul>
                <li>Companies can search for suitable candidates based on their requirements (such as skills, qualifications, and location).</li>
            <li>Once a well-suited candidate is identified, the company can initiate the process and they can send the contract using candidates apprentice id, the candidate can then accept the contract by reading its terms ans condition, and start being an apprentice of the company for the specified period.</li>
            </ul>
            </li>

             <li>
            <strong>Offering the Contract:</strong><br />
            <ul>
                <li>The company sends an apprenticeship contract to the candidate using the candidate’s unique apprentice ID.</li>
            <li>The contract outlines the terms and conditions, including the duration of the apprenticeship and the responsibilities of both parties.</li>
            </ul>
            </li>

             <li>
            <strong>Acceptance and Commencement:</strong><br />
            <ul>
                <li>The candidate reviews the contract and accepts it if they agree with the terms.</li>
            <li>Upon acceptance, the candidate officially becomes an apprentice of the company.</li>
            <li>The specified period of apprenticeship begins, during which the candidate gains practical experience and learns from professionals.</li>
            </ul>
            </li>

             <li>
            <strong>Compensation:</strong><br />
            <ul>
                <li>Companies are required to provide a stipend or compensation to apprentices for their work.</li>
            <li>The amount should be determined before sending the contract and should align with industry standards and regulations.</li>
            </ul>
            </li>

             <li>
            <strong>Skill Development and Learning:</strong><br />
            <ul>
                <li>Throughout the apprenticeship, candidates receive hands-on training, mentorship, and exposure to real-world scenarios.</li>
            <li>They acquire practical skills that enhance their employability and contribute to their professional growth.</li>
            </ul>
            </li>

             <li>
            <strong>Certification and Recognition:</strong><br />
            <ul>
                <li>Successful completion of the apprenticeship leads to certification.</li>
            <li>Apprentices gain recognition for their skills and experience, which can boost their career prospects.</li>
            </ul>
            </li>

             <li>
            <strong>Monitoring and Evaluation:</strong><br />
            <ul>
                <li>Successful completion of the apprenticeship leads to certification.</li>
            <li>Regular assessments ensure that both parties fulfill their commitments.</li>
            </ul>
            </li>

             <h2 className="train-title">Remember that apprenticeships play a crucial role in bridging the gap between theoretical knowledge and practical skills, benefiting both candidates and companies!</h2>

         
        </ol>
        </div>
        <div className="section-line" />




         <div className="pdf-viewer" style={{ margin: '2rem auto', maxWidth: '800px' }}>
        <h3>Apprenticeship Guidelines PDF</h3>
        <iframe
          title="Apprenticeship Guidelines"
          src="https://drive.google.com/file/d/1Om7Q3ymvx0hSjpXnKqEuF1PAtJcpfokp/preview"
          width="100%"
          height="600"
          allow="autoplay"
          style={{ border: 'none' }}
        ></iframe>
      </div>
        </div>
  )
}

export default AprenInfo