import "./About.css";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";

function About() {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="about">
      <div ref={ref} className={`about-container ${inView ? "in-view" : ""}`}>
        <div className="about-text">
          <h2>{t.about.title}</h2>

          {/* Paragraphs Container */}
          <div className="about-paragraphs">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          {/* Moving Courses Section */}
          <div className="courses-section">
            <h3>{t.about.coursesTitle}</h3>

            <div className="marquee-container">
              <div className="marquee-track">
                {[...t.about.courses, ...t.about.courses].map(
                  (course, index) => (
                    <span key={index} className="course-badge">
                      {course}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
