import "./Skills.css";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";

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

const skillList = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <SiFigma />, label: "Figma" },
];

function Skills() {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">{t.skills.title}</h2>

      <div ref={ref} className={`skills-container ${inView ? "in-view" : ""}`}>
        {skillList.map((skill, index) => (
          <div
            className="skill-card"
            key={skill.label}
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            {skill.icon}
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
