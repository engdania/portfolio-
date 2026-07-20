import { useState, type FormEvent } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";

function Contact() {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <h2>{t.contact.title}</h2>

      <p className="contact-subtitle">{t.contact.subtitle}</p>

      <div ref={ref} className={`contact-container ${inView ? "in-view" : ""}`}>
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h3>{t.contact.email}</h3>
              <p>engdaniadev@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaGithub className="icon" />
            <div>
              <h3>{t.contact.github}</h3>
              <a
                href="https://github.com/engdania"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/engdania
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaLinkedin className="icon" />
            <div>
              <h3>{t.contact.linkedin}</h3>
              <a
                href="https://www.linkedin.com/in/dania-abdullah-98b9262b3"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/dania-abdullah
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder={t.contact.namePlaceholder} required />

          <input type="email" placeholder={t.contact.emailPlaceholder} required />

          <textarea
            placeholder={t.contact.messagePlaceholder}
            rows={6}
            required
          ></textarea>

          <button type="submit" className={sent ? "sent" : ""} disabled={sent}>
            {sent ? t.contact.sent : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
