import React from "react";
import Frame1 from "../assets/Frame1.png";

const Gallery: React.FC = () => {
  return (
    <section className="gallery">
      <h2 className="heading2">
        We are here to help you find your dream home and make your real estate
        dreams a reality..
      </h2>
      <div className="paragraph">
        <p className="paragraph2">
          As a potential homebuyer, you want to work with a real estate company
          that has your best interests in mind. That's where E-Tracka comes in.
          We are a team of dedicated professinals who are passionate about
          helping you find your dream home.
        </p>
        <button className="button2">Read More</button>
      </div>
      <img src={Frame1} alt="Sittingroom" className="sitting-room" />
    </section>
  );
};

export default Gallery;
