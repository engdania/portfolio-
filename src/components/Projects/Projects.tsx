import "./Projects.css";
import dentalImage from "../../images/dental.png";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";

function Projects() {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="projects" className="projects">
      <h2>{t.projects.title}</h2>

      <div ref={ref} className={`project-card ${inView ? "in-view" : ""}`}>
        <div className="project-image">
          <img src={dentalImage} alt="Dental Clinic" />
        </div>

        <div className="project-info">
          <h3>{t.projects.projectTitle}</h3>

          <p>{t.projects.desc}</p>

          <h4>{t.projects.tech}</h4>

          <p className="tech-list">
            React • TypeScript • Node.js • Express • PostgreSQL
          </p>

          <div className="project-buttons">
            <a
              href="https://github.com/engdania/dental-clinic.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.github}
            </a>
            <a
              href="https://github.com/engdania/dental-clinic.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.liveDemo}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
