import React from "react";
import rectangle1 from "../assets/rectangle1.png";
import rectangle2 from "../assets/rectangle2.png";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="parent-div">
        <div className="first">
          <h1>Discover Your Dream Home: Find Your Perfect Property With Us</h1>
        </div>
        <div className="second">
          <p>
            Welcome to our real estate company, where your dream home awaits. We
            specialize in helping individuals and families find their perfect
            property, tailored to their unique needs and preferences.
          </p>
          <button className="get-started">Get Started</button>
        </div>
      </div>
      <div className="layout">
        <img src={rectangle1} alt="Rectangle1" className="layout-img1" />
        <img src={rectangle2} alt="Rectangle2" className="layout-img2" />
      </div>
    </section>
  );
};

export default Hero;
