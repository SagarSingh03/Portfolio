import React from 'react';
import './Skill.css';

function Skill() {
  return (
    <div>
      <div className="skills-list">
        <strong>Skills</strong>
        <br />
        <p className="quote">
          "Progress is not an accident, but a necessity." — Herbert Spencer
        </p>
        <p className="quote2">
          I Believe in evolving through CONSTANT learning AND improving
        </p>
      </div>

      <div className="skills-container">
        <span className="skill-tag" id="html">Html</span>
        <span className="skill-tag" id="css">CSS</span>
        <span className="skill-tag" id="javascript">Javascript</span>
        <span className="skill-tag" id="react">REACT</span>
        <span className="skill-tag" id="git">GIT</span>
        <span className="skill-tag" id="github">GITHUB</span>
        <span className="skill-tag" id="mui">MUI</span>
        <span className="skill-tag" id="firebase">FIREBASE</span>
        <span className="skill-tag" id="vs-code">VS Code</span>
        <span className="skill-tag" id="replit">REPLIT</span>
        <span className="skill-tag" id="canva">CANVA</span>

        <span className="skill-tag" id="java">Java</span>
        <span className="skill-tag" id="operating-system">Operating System</span>
        <span className="skill-tag" id="computer-networks">Computer Networks</span>
        <span className="skill-tag" id="es6">ES6</span>
        <span className="skill-tag" id="redux">Redux</span>
        <span className="skill-tag" id="bootstrap">BootStrap</span>
        <span className="skill-tag" id="tailwind">Tailwind</span>

        <span className="skill-tag" id="dsa">Data Structures and Algorithms</span>
        <span className="skill-tag" id="sdlc">Software Development LifeCycle</span>
        <span className="skill-tag" id="sql">SQL (MySQL)</span>
      </div>
    </div>
  );
}

export default Skill;