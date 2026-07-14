import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        Have a project in mind or want to connect? Feel free to reach out!
      </p>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>daniaabdullahh@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaGithub className="icon" />
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/dania abdullah"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/dania abdullah
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaLinkedin className="icon" />
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/dania-abdullah-98b9262b3"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/dania abdullah
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows={6} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
