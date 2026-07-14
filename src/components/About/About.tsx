import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="" alt="Dania" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            Hello! I'm <strong>Dania Abdullah</strong>, a Software Engineering
            student at the University of Kurdistan Hewler (UKH).
          </p>

          <p>
            I enjoy building modern software solutions using React, TypeScript,
            Node.js, and PostgreSQL.
          </p>

          <p>
            I'm passionate about learning new technologies and creating
            responsive, user-friendly websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
