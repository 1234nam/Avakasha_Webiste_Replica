import React from 'react'

const InternInfo = () => {
  return (
      <div className="tsinfo-container">
         {/* How to Train Section */}
      <div className="train-section">
        <h2 className="train-title">Guide for internship </h2>
        <ul>
            <li>Internship can be provided for students as well as graduates which is useful to candidates as they can get in hand experience.</li>
            <li>For a candidate to be eligible to do internship, the candidate should be aged 18 and above.</li>
            <li>For a company to provide internship, it may or may not be legally registered company (i.e. non registered startup can also provide internship, but it should meet other criteria). Legally registered means that the company has been recognized by respective government and are permitted to do business in their respective places.</li>
            <li>Companies can directly provide internship by providing letter of intent (LOI) to the candidates as a doc of authenticity / proof before they join as an intern in the organization.</li>
            <li>Stipend for candidates depends on the company, if a company wishes to provide stipend or not is up to the company to decide, and joining the internship program or not is up to the candidate to decide, irrespective of both, the company should mention the stipend in LOI.</li>
            <li>After the time line of internship comes to end, the company should provide a letter of completion to the intern specifying what the intern has worked on and for how many days/months/ year.</li>
            <li>The company can also mention what the intern has achieved during his time of internship which would be beneficial to the interns career.</li>
            <li>Candidates who join as intern are required to follow the code of conduct and be in their best behavior. The company can take action if any in appropriate behavior or action if shown by interns.</li>
            <li>The company can register in AICET internship website and mark themself as internship providers to provide other internship opportunity in future.</li>
            <li>AICET internship guidelines can be referred to evaluate the progress of interns.</li>
        </ul>






        <h2 className="train-title">Steps to CREATE an EFFECTIVE INTERNSHIP PROGRAM </h2>
        {/* <p className="train-subtext">
          There are a lot more options to train candidates. Some of them are:
        </p> */}

        <ol className="train-list">
          <li>
            <strong>Define Your Objectives:</strong><br />
            Determine the goals and objectives of your internship program. What do you want students to learn and gain from the experience? Consider both the organization's needs and the educational goals of the students.
          </li>

          <li>
            <strong>Identify Roles and Responsibilities:</strong><br />
            Clarify the roles and responsibilities of both the intern and the organization. Define the tasks, projects, and assignments the interns will be involved in. </li>

          <li>
            <strong>Design the Program Structure:</strong><br />
          Decide on the duration of the internship (e.g., summer, semester-long, or year-round). Determine whether the internships will be paid or unpaid. Ensure compliance with labor laws and regulations.</li>

          <li>
            <strong>Establish the number of hours per week or the total hours required.</strong><br />
            Consider whether the internship will be on-site or remote, depending on the organization's capabilities and needs.</li>

            <li>
            <strong>Recruitment and Selection:</strong><br />
            Develop a process for recruiting and selecting interns. This may involve creating job postings, conducting interviews, and evaluating candidates based on their skills, qualifications, and alignment with your program's objectives.</li>

            <li>
            <strong>Orientation and Training:</strong><br />
            Provide a comprehensive orientation to introduce interns to your organization, its culture, and its expectations. Offer training on tools, software, safety protocols, and any other relevant skills or knowledge.</li>

            <li>
            <strong>Mentorship and Supervision:</strong><br />
            Assign mentors or supervisors to guide and support interns throughout their internship period. Encourage regular check-ins and feedback sessions to monitor progress and provide guidance.</li>

            <li>
            <strong>Project Assignments:</strong><br />
           Assign interns to specific engineering projects or teams based on their interests and skills. Ensure that the projects are meaningful, challenging, and aligned with the interns' educational and career goals.</li>

            <li>
            <strong>Learning Objectives and Evaluation:.</strong><br />
            Define clear learning objectives for each intern. Establish evaluation criteria and performance metrics to assess the interns' progress and contributions.</li>

            <li>
            <strong>Professional Development:</strong><br />
            Provide opportunities for professional development, such as workshops, seminars, and networking events. Encourage interns to set and work toward their career development goals.</li>

            <li>
            <strong>Feedback and Evaluation:</strong><br />
            Conduct regular performance reviews and provide constructive feedback to help interns improve. Encourage interns to provide feedback on their internship experience to help you refine the program.</li>

            <li>
            <strong>Certificates and Recognition:</strong><br />
            Issue certificates or letters of completion to interns who successfully complete the program. Consider recognizing outstanding interns with awards or recommendations.</li>

            <li>
            <strong>Legal and Compliance:</strong><br />
           Ensure compliance with labor laws, internship regulations, and any required documentation. Address any legal and liability concerns, such as insurance coverage.</li>

            <li>
            <strong>Continuous Improvement:</strong><br />
            Collect feedback from both interns and supervisors to identify areas for improvement in the internship program. Use this feedback to refine and enhance the program in subsequent iterations.</li>

            <li>
            <strong>Promotion and Outreach: </strong><br />
            Promote your internship program through educational institutions, career centers, and online platforms to attract a diverse pool of candidates. </li>
            
             <h2 className="train-title">Remember that an effective internship program should not only benefit the organization but also provide valuable learning experiences for the students. 
It should be a mutually beneficial partnership that helps students gain real-world skills and helps the organization meet its goals and objectives.</h2>
            
        </ol>
        </div>
        <div className="section-line" />


        
      {/* Embedded PDF viewer */}
      <div className="pdf-viewer" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <iframe
          title="AICTE Internship Guidelines"
          src="https://drive.google.com/file/d/1gIrM81EnSrWPc_vlX6P3J-QrmlHbRTgI/preview"
          width="100%"
          height="600"
          allow="autoplay"
          style={{ border: 'none', maxWidth: '800px' }}
        ></iframe>
      </div>

      
        </div>
  )
}

export default InternInfo