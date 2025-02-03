import React, { useState } from "react";
import Frame from "../assets/Frame.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="site-name">
          <img src={Frame} className="logo" alt="Logo" />
        </div>
        <ul className={`list ${isOpen ? "open" : ""}`}>
          <li className="list-items">Home</li>
          <li className="list-items">About us</li>
          <li className="list-items">Services</li>
          <li className="list-items">Testimonials</li>
        </ul>
        <div className="buttons">
          <button className="sign-up">Sign Up</button>
          <button className="login">Login</button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </nav>
    </header>
  );
};

export default Header;
