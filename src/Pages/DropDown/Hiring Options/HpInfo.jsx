import React from 'react'
import './HpInfo.css'

const HpInfo = () => {
  return (
    <div className="hpinfo-container">
         {/* How to Train Section */}
      <div className="hp-section">
        <h2 className="hp-title">There are 6 different hiring options:</h2>
        <p className="hp-subtext">
          Here is a brief explanation of the different hiring options:
        </p>

        <ol className="hp-list">
          <li>
            <strong>Full-time: </strong><br />
            A full-time employee works for a company for a set number of hours per week, typically 40 hours. They are entitled to benefits such as health insurance, paid time off, and retirement plans. Full-time employees are usually paid a salary.</li>

          <li>
            <strong>Part-time:</strong><br />
            A part-time employee works fewer hours than a full-time employee, typically less than 30 hours per week. They are not entitled to the same benefits as full-time employees, but they may receive some benefits such as paid time off or health insurance.   </li>

          <li>
            <strong>Contract: </strong><br />
            A contract employee is hired for a specific period of time to complete a project or task. They are not considered permanent employees and are not entitled to benefits such as health insurance or paid time off.          </li>

         <li>
            <strong>Apprenticeship:  </strong><br />
             An apprenticeship is a program that provides on-the-job training for individuals who want to learn a skilled trade. Apprentices are not considered permanent employees and are not entitled to benefits such as health insurance or paid time off.       </li>
       <li>
            <strong>Freelance:  </strong><br />
A freelancer is a self-employed individual who provides services to clients on a project-by-project basis. Freelancers are not considered permanent employees and are not entitled to benefits such as health insurance or paid time off. They are usually paid on a per-project basis.    </li>  
         
           </ol>
        </div>
        <div className="section-line" />

        
        </div>
  )
}

export default HpInfo