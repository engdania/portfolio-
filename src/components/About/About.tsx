import "./About.css";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";

function About() {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="about">
      <div
        ref={ref}
        className={`about-container ${inView ? "in-view" : ""}`}
      >
        <div className="about-image">
          <div className="about-image-frame">
            <img src="" alt="Dania" />
          </div>
        </div>

        <div className="about-text">
          <h2>{t.about.title}</h2>

          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
