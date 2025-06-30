import React from 'react';
import './InsInfo.css';

const InsInfo = () => {
  return (
    <div className="institute-info">
      <h1 className="institute-welcome">Welcome to Avakasha!</h1>
      <p className="institute-intro">
        We are thrilled to have you join us. Avakasha is dedicated to connecting talented candidates with exciting job opportunities and fostering professional growth through apprenticeships and internships.
      </p>
      <p className="institute-description">
        Avakasha, a platform dedicated to bridging the gap between education and employment. Avakasha is designed to provide students with valuable opportunities to gain practical experience and develop their professional skills through apprenticeships and internships.
      </p>

      <h2 className="benefits-title-ins">Benefits of Registering with Avakasha:</h2>

      <ul className="benefits-list-ins">
        <li>
          <strong>Enhanced Career Opportunities:</strong> Students can access a wide range of job openings across various industries, tailored to their field of study and career aspirations.
        </li>
        <li>
          <strong>Skill Development:</strong> Our programs are designed to help students gain hands-on experience, enhancing their skills and preparing them for the workforce.
        </li>
        <li>
          <strong>Professional Networking:</strong> Avakasha offers students the chance to connect with industry professionals, expanding their professional network and opening doors to future opportunities.
        </li>
        <li>
          <strong>Personalized Support:</strong> Students receive personalized support and guidance throughout their job search and career development journey, ensuring they make the most of the opportunities available.
        </li>
      </ul>
      <p>
        We encourage colleges and universities to share this opportunity with their students and support them in taking the first step towards a successful career.
      </p>
      <h3 className="register-subtitle">
        Please fill the form to register.
      </h3>
      <div className="button-group-ins">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScSU-maQIq6JzQNtMPQfXesYyVmzBm2bpZ5LK7P7WmZVR7KNQ/viewform"
          className="btn-outline-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
        </div>

    </div>
  );
};

export default InsInfo;
