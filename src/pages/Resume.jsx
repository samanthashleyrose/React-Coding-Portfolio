export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Proficiencies</h3>
        <div className="proficiencies">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
          <ul>
            <li>MySQL</li>
            <li>Sequelize ORM</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="details">
          <h3>Frontend Development</h3>
          <p>Skilled at crafting structured, semantic HTML markup for web applications. Adept at styling web pages using CSS, encompassing layout design, responsiveness, and animations. Well-versed in modern JavaScript programming, covering ES6+ syntax, DOM manipulation, and asynchronous programming.</p>
          <h3>Backend Development</h3>
          <p>Competent in constructing server-side applications and APIs using Node.js. Skilled in developing web applications and RESTful APIs utilizing the Express.js framework. Proficient in crafting dynamic and interactive user interfaces with the React.js library.</p>
          <h3>Database Management</h3>
          <p>Capable of designing and managing relational databases using MySQL and Sequelize ORM for Node.js applications. Skilled in NoSQL database management, including data modeling, querying, and aggregation pipelines.</p>
        </div>
        <h3>Education</h3>
        <div className="education">
          <div >
            <h4 className="edu-info">South Windsor High School</h4>
            <p className="edu-degree"> Graduated May 2018 - Diploma</p>
          </div>
          <div >
            <h4 className="edu-info">UConn's Coding Bootcamp</h4>
            <p className="edu-degree"> Graduated March 2024 - Full Stack Certificate</p>
          </div>
        </div>
        <br />
        <p id="download-resume">Click to download my resume: <a href="/src/assets/pdf/RESUME-2024-Samantha-Rose.pdf" download>Resume.pdf</a></p>
      </div>
    </div>
  );
}