import React, { useState } from 'react';
import './FAQInfo.css';

const faqs = [
  {
    question: 'What services does Avakasha provide?',
    answer: 'Avakasha provides recruiting services for new age companies in various fields. We specialize in recruiting both fresh graduates and experienced professionals. We primarily focus on providing internship and apprenticeship for freshers.',
  },
  {
    question: 'Where does Avakasha provide its services?',
    answer: 'Avakasha provides services pan-India through its online platform and remote collaborations.',
  },
  {
    question: 'How can a company partner with Avakasha?',
    answer: 'Companies can register on our website using the company registration form and post job opportunities for candidates.',
  },
  {
    question: 'What is the cost of Avakasha’s services?',
    answer: 'Our basic internship and apprenticeship matching service is free for candidates. For companies, we offer both free and premium plans.',
  },
   {
    question: 'How does Avakasha ensure the quality of candidates?',
    answer: 'Avakasha has a rigorous selection process to ensure we provide our partners with the brightest talents in their respective fields. More info about this can be found in Evaluation page.',
  },
   {
    question: 'How can a candidate apply through Avakasha?',
    answer: 'Candidates interested in applying through Avakasha can register by filling the one time candidate on-boarding form and following the procedures as available in the register tab.',
  },
  {
    question: 'What types of companies does Avakasha work with?',
    answer: 'Avakasha works with new age companies across various fields. We specialize in industries that are innovative and related to engineering.',
  },
  {
    question: 'How does Avakasha support the recruitment process? ',
    answer: 'Avakasha supports the recruitment process by sourcing and shortlisting candidates based on the company’s requirements. We also coordinate interviews and provide follow-up services.',
  },
  {
    question: 'Can a candidate apply to multiple jobs through Avakasha? ',
    answer: 'Yes, candidates can are eligible to apply to multiple jobs that match their skills and preferences, once candidates submit their registration, they are not required to apply for each and every job requirements, it automatically gets updated . We aim to provide candidates with opportunities that align with their career goals. ',
  },
  {
    question: 'Does Avakasha provide training or mentoring for candidates? ',
    answer: 'While Avakasha primarily focuses on recruitment, any additional services such as training or mentoring would depend on the specific arrangements with our partners. For more accurate information, please contact us directly. ',
  },
  {
    question: 'How does Avakasha ensure a good fit between the candidate and the company? ',
    answer: 'Avakasha takes into account not just the qualifications and skills of a candidate, but also their aspirations, cultural fit, and other factors that contribute to a successful placement.',
  },
  {
    question: 'What kind of support does Avakasha provide post-placement?',
    answer: 'The level of post-placement support provided by Avakasha can vary. It’s best to contact us directly for this information. ',
  },
  {
    question: 'How can a company provide feedback on Avakasha’s services? ',
    answer: 'Companies can provide feedback through the contact methods provided, including email and LinkedIn. We value feedback as it helps us improve our services.',
  },
  {
    question: ' What is the process for a company to terminate its partnership with Avakasha? ',
    answer: 'The process for termination would be outlined in the partnership agreement. For specifics, it’s best to contact us directly or refer to the agreement. ',
  },
  {
    question: 'How does Avakasha handle urgent hiring needs? ',
    answer: 'Avakasha underastands that some companies may have urgent hiring needs. We strive to expedite our recruitment process to meet these needs without compromising the quality of candidates. For specifics, it’s best to contact us directly. ',
  },
  {
    question: 'Does Avakasha provide staffing services for temporary or contract positions? ',
    answer: 'Avakasha currently does not provide this service. This can be included in further days.',
  },
  {
    question: ' How does Avakasha stay updated with the latest trends in various fields? ',
    answer: 'Avakasha stays updated with the latest trends in various fields through continuous research and by maintaining strong relationships with industry professionals and organizations.',
  },
  {
    question: 'What makes Avakasha different from other staffing and recruitment agencies? ',
    answer: 'Avakasha prides itself on its commitment to nurturing young talents and providing quality staffing services for both companies and candidates. We believe in creating mutually beneficial partnerships with companies and helping candidates find their ideal roles. ',
  },

  {
    question: 'How does Avakasha handle communication with candidates and companies?',
    answer: 'Avakasha maintains open and transparent communication with both candidates and companies. We ensure all parties are updated about the recruitment process and any changes or updates.',
  },
  {
    question: 'Does Avakasha provide services for overseas companies looking to hire in Bangalore?',
    answer: 'A22: Avakasha primarily provides services in Bangalore. If an overseas company is looking to hire in Bangalore, we can certainly assist. For more details, please contact us directly.',
  },
  
  

];

const FAQInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQ's</h1>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              Q{index + 1}: {item.question}
              <span className="toggle-icon">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <strong>A{index + 1}:</strong> {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQInfo;
