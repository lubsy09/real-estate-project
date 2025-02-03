import React from "react";
import Frame3 from "../assets/Frame3.png";
import rectangle4 from "../assets/rectangle4.png";
import rectangle5 from "../assets/rectangle5.png";

const Insight: React.FC = () => {
  return (
    <section className="insight">
      <div className="first-row">
        <h3 className="heading5">Read Our Insight</h3>
        <img src={Frame3} alt="Insights" className="arrow" />
      </div>
      <div className="duplex">
        <img src={rectangle4} alt="Duplex" />
        <img src={rectangle5} alt="Duplex" />
      </div>
      <div className="twin-row">
        <div>
          <div>
            <h4>The Ultimate Guide to Finding Your Dream Home</h4>
            <p>
              We understand the importance of finding the perfect place to call
              your own. In this comprehensive guide, we will walk you through
              the essential steps and insider...
            </p>
          </div>
        </div>
        <div>
          <div>
            <h4>The Ultimate Guide to Finding Your Dream Home</h4>
            <p>
              We understand the importance of finding the perfect place to call
              your own. In this comprehensive guide, we will walk you through
              the essential steps and insider...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
