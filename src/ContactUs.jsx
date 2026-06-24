import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p className="subtitle">
          We'd love to hear from you! Feel free to send us your questions,
          suggestions, or feedback.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input-field" />

          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
          />

          <input type="text" placeholder="Subject" className="input-field" />

          <textarea
            placeholder="Write your message..."
            rows="6"
            className="input-field"
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
