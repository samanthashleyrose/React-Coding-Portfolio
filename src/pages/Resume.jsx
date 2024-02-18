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
        </div>
        <p id="download-resume">Click to download my resume: <a href="/src/assets/pdf/RESUME-2024-Samantha-Rose.pdf" download>Resume.pdf</a></p>
      </div>
    </div>
  );
}