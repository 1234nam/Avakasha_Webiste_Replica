
import React, { useState } from 'react';
import './GetInTouch.css';

const faqs = [
  {
    question: 'Q1: What services does Avakasha provide?',
    answer:
      'Avakasha provides recruiting services for new age companies in various fields. We specialize in recruiting both fresh graduates and experienced professionals. We primarily focus on providing internships and apprenticeships for freshers.',
  },
  {
    question: 'Q2: How can I apply for an internship at Avakasha?',
    answer:
      'To apply for an internship, visit our website and fill out the internship application form. Ensure that you upload your resume and relevant documents. Our team will review your application and contact you if shortlisted.',
  },
   { 
    question: 'Q3: What are the eligibility requirements for apprenticeships?',
    answer:
      'Our apprenticeship programs are open to both fresh graduates and experienced professionals. Applicants should have a keen interest in learning and developing practical skills in their chosen field. Specific requirements may vary by role.',
  },
];

const GetInTouch = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="get-in-touch-section">
        <h2>
          Ready <span className="highlight">to talk?</span>
          <br />
          Get in <span className="highlight">touch.</span>
        </h2>
        <button className="contact-btn">Contact Sales</button>
      </div>

      <div className="faq-section">
        <h3 className="faq-heading">FAQ's</h3>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={`faq-question q${index + 1}`}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default GetInTouch;
