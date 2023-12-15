import React from "react";
import './ContactUs.css';
import contactUs from "../../assets/images/contact-bg.jpg";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <div className="ContactUs-bg">
        <img src={contactUs} alt="Contact Background" />
      </div>
      <div className="ContactUs-Content">
        <div className="ContactUs-Message">
          <h1>Get in touch</h1>
          <p>
            Hello there! We love hearing from our readers! Whether you have a
            question, suggestion, or just want to say hello, we're here for
            you. Your feedback is invaluable, and we appreciate you being a part
            of our community. Best regards, Crossfit Team.
          </p>
        </div>
        <div className="ContactUs-form">
          <div className="input-group">
            <div className="input-holder">
              <div className="placeholder"></div>
              <input className="input" type="text" placeholder="Name" />
            </div>
            <div className="input-holder">
              <div className="placeholder"></div>
              <input className="input" type="email" placeholder="example@hotmail.com"/>
            </div>
          </div>
          <div className="input-holder">
            <div className="placeholder"></div>
            <input className="input" type="text" placeholder="Subject" />
          </div>
          <div className="input-holder">
            <div className="placeholder"></div>
            <textarea className="input" placeholder="Your message..." rows="5" />
          </div>
          <div className="ContactUs-submit">Send</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
