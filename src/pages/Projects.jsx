import { useState } from 'react';

export default function Projects() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h2>Projects</h2>
      <h3>Group Efforts</h3>
      <div className="group-img-section">
        <img
          src="/src/assets/imgs/rooms-sc.png"
          alt="Screenshot of rööms homepage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {isHovered && <a href="https://rooms-3226fb27d847.herokuapp.com/login" className="hover-text-1">rööms</a>}

        <img 
        src="/src/assets/imgs/Meal2Reel-Empty-SC.png" 
        alt="Screenshot of Meal2Reel homepage" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
        {isHovered && <p className="hover-text-2">Meal2Reel</p>}

      </div>
      <h3>Solo Efforts</h3>
      <div className="solo-img-row-1">
        <img 
        src="/src/assets/imgs/LeeQuotes.com-SC.png" 
        alt="Screenshot of LeeQuotes.com" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}/>
        {isHovered && <p className="hover-text-1">LeeQuotes.com</p>}
        <img 
        src="/src/assets/imgs/Mandela-Effect-Challenge.png" 
        alt="Screenshot of Mandela Effect Challenge" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}/>
        {isHovered && <p className="hover-text-2">Mandela Effect Challenge</p>}
      </div>
      <br />
      <br />
      <div className="solo-img-row-2">
        <img 
        src="/src/assets/imgs/README-gen-SC.png" 
        alt="Screenshot of README Generator" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}/>
        {isHovered && <p className="hover-text-1">README.md Generator</p>}
        <img 
        src="/src/assets/imgs/employee-tracker.png" 
        alt="Screenshot of Employee Generator" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}/>
        {isHovered && <p className="hover-text-2">Employee Tracker Database</p>}
      </div>
    </div>
  );
}