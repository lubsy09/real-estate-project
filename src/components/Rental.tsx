import React from "react";
import image54 from "../assets/image54.png";
import image55 from "../assets/image55.png";
import image56 from "../assets/image56.png";
import Frame2 from "../assets/Frame2.png";

const Rental: React.FC = () => {
  return (
    <section className="rental">
      <h2 className="heading3">
        Experience a cutting-edge residential real estate gallery, driven by
        technolgy and expertly managed.
      </h2>
      <div className="estate-btn">
        <button className="button3">See all</button>
      </div>

      <div className="estate">
        <img src={image54} alt="Lounge" className="sample" />
        <img src={image55} alt="Restroom" className="sample" />
        <img src={image56} alt="Balcony" className="sample" />
      </div>

      <img src={Frame2} alt="Frame-footer" className="frame-footer" />
    </section>
  );
};

export default Rental;
