import React from "react";
import image59 from "../assets/image59.png";
import TRACKA from "../assets/TRACKA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact-box">
        <h3 className="heading6">
          Our Marketing Services Span <br />
          Across the Globe
        </h3>
        <button className="contact-btn">Contact us now</button>
        <img src={image59} className="img59" />
      </div>
      <hr className="footer-line" />
      <div className="footer">
        <div>
          <img src={TRACKA} className="tracka" />
        </div>
        <div>
          <p>Privacy & Terms Setmap Status</p>
        </div>
        <div>
          <p>&copy; 2024 Tracka Real Estate</p>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
