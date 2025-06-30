import React from 'react';
import './TsInfo.css';
import forageImg from '../../../assets/forage-preview.png'; 
import f1 from '../../../assets/f2.png'; 
import f2 from '../../../assets/f3.png'; 
import f3 from '../../../assets/f4.png'; 
import f4 from '../../../assets/f5.png'; 
import f5 from '../../../assets/f6.png'; 
import f6 from '../../../assets/f7.png'; 


const TsInfo = () => {
  return (
    <div className="tsinfo-container">
         {/* How to Train Section */}
      <div className="train-section">
        <h2 className="train-title">How to train?</h2>
        <p className="train-subtext">
          There are a lot more options to train candidates. Some of them are:
        </p>

        <ol className="train-list">
          <li>
            <strong>Courses:</strong><br />
            Courses help candidates learn from those who have learnt. It is usually preferred because it can save the candidate time like, searching for what to learn, when to learn, pathway to learn, etc. Candidate can choose a course and the trainers will guide them to achieve the course goals.
          </li>

          <li>
            <strong>Job:</strong><br />
            A real and practical experience of in-hand work, the best way to train a candidate but requires company time and money to do so.
          </li>

          <li>
            <strong>Internship:</strong><br />
            These are ways to make candidates learn the procedures of work and in some scenarios make candidates work on specific tasks. This also requires company time, but company money is optional.
          </li>

          <li>
            <strong>Apprenticeship:</strong><br />
            An alternate way to make candidates learn and implement the procedures of work and work like a real employee. Candidates get exposure to various physical tasks and can also earn while they learn.
          </li>
        </ol>
        </div>
        <div className="section-line" />


      {/* FORAGE Section */}
      <div className="forage-section">
        <h2><span className="highlight">1. FORAGE:</span></h2>
        <p>
          It is a job simulation platform that is designed marvelously to enhance training of the candidates.
          It offers many programs for many different roles partnered with various companies across the globe.
          It's free of cost and the candidate will get a completion certificate after completing the program,
          it's a win-win strategy for company as well as candidates!
        </p>
        
        <img src={forageImg} alt="Forage site preview" className="tsinfo-img" />
          <p className="external-link">
                &nbsp;
    <a href="https://www.theforage.com//" target="_blank" rel="noopener noreferrer">
      https://www.theforage.com/
    </a>
  </p>
      </div>
      <div className="section-line" />



      {/* FORAGE Section */}
      <div className="forage-section">
        <h2><span className="highlight">3. Visme.co</span></h2>
        <p>Visme is an all-in-one marketing and design platform that empowers users to create engaging, on-brand content with the added power of AI. Visme offers features like AI design, data visualization, templates, branded content, and collaboration. Whether you’re creating presentations, infographics, videos, or social media graphics, Visme provides a comprehensive solution. Explore your creativity at Visme.co.         </p>
        <img src={f2} alt="Forage site preview" className="tsinfo-img" />
         
      </div>
      <div className="section-line" />


        {/* FORAGE Section */}
      <div className="forage-section">
        <h2><span className="highlight">4. Pixelbin</span></h2>
        <p>PixelBin is an AI-based image transformation platform that simplifies storing and optimizing images with high quality. It allows users to upload and manage images efficiently, automatically optimizing them for faster loading and improved SEO. With features like responsive delivery, custom workflows, and real-time transformations, PixelBin enhances visual experiences on the web. Explore the power of PixelBin at PixelBin.io. </p>
         <img src={f3} alt="Forage site preview" className="tsinfo-img" />
          <p className="external-link">
                &nbsp;
         <a href="https://www.pixelbin.io/" target="_blank" rel="noopener noreferrer">
         https://www.pixelbin.io/
    </a>
  </p>
         
      </div>
      <div className="section-line" />


        {/* FORAGE Section */}
      <div className="forage-section">
        <h2><span className="highlight">5. duolingo</span></h2>
        <p>Duolingo is the world’s most popular language learning platform. It offers free, fun, and science-based courses in over 40 languages. Whether you’re a beginner or aiming to improve your skills, Duolingo provides bite-sized lessons for reading, writing, listening, and speaking. Their delightful content, game-like features, and personalized learning approach make language acquisition enjoyable. Additionally, Duolingo offers an English proficiency test and tools for teachers and young learners. </p>
         <img src={f4} alt="Forage site preview" className="tsinfo-img" />
          <p className="external-link">
                &nbsp;
         <a href="https://www.duolingo.com/" target="_blank" rel="noopener noreferrer">
         https://www.duolingo.com/
        </a>
        </p>
         
      </div>
      <div className="section-line" />   



       {/* FORAGE Section */}
      <div className="forage-section">
        <h2><span className="highlight">6. NetCad.com</span></h2>
        <p>Netcad is a pioneering platform in spatial digitalization, offering solutions for smart urbanism and engineering. Their innovative tools plan for the future while simplifying current processes. Whether you’re interested in urban planning, infrastructure, or engineering, Netcad provides cutting-edge solutions. </p>
         <img src={f5} alt="Forage site preview" className="tsinfo-img" />
          <p className="external-link">
                &nbsp;
         <a href="https://www.netacad.com/index.php" target="_blank" rel="noopener noreferrer">
         https://www.netacad.com/index.php
        </a>
        </p>
         
      </div>
      <div className="section-line" />   



       {/* FORAGE Section */}
      <div className="forage-section">
        <h2><span className="highlight">7. Tinkercad</span></h2>
        <p>Tinkercad is a free web app that empowers users to create 3D digital designs, explore electronics, and delve into coding. </p>
          <img src={f6} alt="Forage site preview" className="tsinfo-img" />
          <p className="external-link">
                &nbsp;
         <a href="https://www.tinkercad.com/circuits" target="_blank" rel="noopener noreferrer">
         https://www.tinkercad.com/circuits
        </a>
        </p>
         
      </div>
      <div className="section-line" />   

      


     
      
    </div>
  );
};

export default TsInfo;
