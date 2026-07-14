import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>welcome to Dania's portfolio</h1>

        <h2>Software Engineering Student-UGIII</h2>

        <p>
          i am a software engineering student with a passion for creating
          innovative and efficient solutions. I enjoy working on challenging
          projects that allow me to learn and grow as a developer.
        </p>

        <a href="/Dania_Abdullah_CV.pdf" download className="download-btn">
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Hero;
