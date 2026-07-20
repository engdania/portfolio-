import "./Hero.css";
import { useLanguage } from "../../i18n/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-glow glow-1" aria-hidden="true" />
      <div className="hero-glow glow-2" aria-hidden="true" />
      <div className="hero-glow glow-3" aria-hidden="true" />

      <div className="hero-text">
        <span className="hero-role">{t.hero.role}</span>
        <h1>{t.hero.welcome}</h1>

        <a href="/Dania_Abdullah_CV.pdf" download className="download-btn">
          {t.hero.downloadCV}
        </a>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span className="scroll-mouse">
          <span className="scroll-dot" />
        </span>
      </a>
    </section>
  );
}

export default Hero;
