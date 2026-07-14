import "./Projects.css";
import dentalImage from "../../images/dental.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-card">
        <img src={dentalImage} alt="Dental Clinic" />

        <div className="project-info">
          <h3>Dental Clinic Management System</h3>

          <p>
            A full-stack dental clinic management system that allows
            administrators to manage patients, dentists, appointments, and
            treatments.
          </p>

          <h4>Technologies</h4>

          <p>React • TypeScript • Node.js • Express • PostgreSQL</p>

          <div className="project-buttons">
            <a
              href="https://github.com/engdania/dental-clinic.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
