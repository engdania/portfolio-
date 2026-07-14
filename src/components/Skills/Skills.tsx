import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFigma,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        <div className="skill-card">
          <FaHtml5 />
          <p>HTML5</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt />
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <SiJavascript />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <SiTypescript />
          <p>TypeScript</p>
        </div>

        <div className="skill-card">
          <FaReact />
          <p>React</p>
        </div>

        <div className="skill-card">
          <FaNodeJs />
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <SiExpress />
          <p>Express</p>
        </div>

        <div className="skill-card">
          <SiPostgresql />
          <p>PostgreSQL</p>
        </div>

        <div className="skill-card">
          <SiMongodb />
          <p>MongoDB</p>
        </div>

        <div className="skill-card">
          <FaGitAlt />
          <p>Git</p>
        </div>

        <div className="skill-card">
          <FaGithub />
          <p>GitHub</p>
        </div>

        <div className="skill-card">
          <FaDocker />
          <p>Docker</p>
        </div>

        <div className="skill-card">
          <SiFigma />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
