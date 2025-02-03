import React from "react";
import rectangle3 from "../assets/rectangle3.png";

const Business: React.FC = () => {
  return (
    <section className="business">
      <h2 className="heading4">
        Injecting some integrity into the real estate business.
      </h2>
      <div className="paragraph4">
        <p
          style={{
            color: "gray",
            fontSize: "18px",
            lineHeight: "30px",
          }}
        >
          We believe at times that quality was bit deficient and there is a need
          to do things mostly to some level of international standards.
        </p>
      </div>

      <div className="mansion">
        <img src={rectangle3} alt="Home" className="home" />
        <div>
          <div className="location">
            <div className="row">
              <div>
                <p style={{ color: "gray" }}>Duplex/Exclusive</p>
                <h3>128 Odumosu road, Ijebo ode Lagos</h3>
                <p style={{ fontWeight: "bold", color: "gray" }}>$120,000</p>
              </div>
              <div>
                <button>View details</button>
              </div>
            </div>
            <hr className="line" />
          </div>

          <div className="location">
            <div className="row">
              <div>
                <p style={{ color: "gray" }}>Duplex/Exclusive</p>
                <h3>32 Herbert Macualey RD, Lekki</h3>
                <p style={{ fontWeight: "bold", color: "gray" }}>$320,000</p>
              </div>
              <div>
                <button>View details</button>
              </div>
            </div>
            <hr className="line" />
          </div>

          <div className="location">
            <div className="row">
              <div>
                <p style={{ color: "gray" }}>Duplex/Exclusive</p>
                <h3>32 Jakande Estate, Lekki</h3>
                <p style={{ fontWeight: "bold", color: "gray" }}>$320,000</p>
              </div>
              <div>
                <button>View details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
