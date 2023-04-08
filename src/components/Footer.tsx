import React from "react";
import Cabin from "../assets/images/cabin1.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <a>Facebook</a>
        <a>Twitter</a>
        <a>Instagram</a>
      </section>

      <section className="sliders">
        <div className="slide-button"></div>
        <div className="slide-button"></div>
        <div className="slide-button"></div>
        <div className="slide-button"></div>
      </section>

      <section>
        <div className="location">
          <div className="location-text">
            <p>Next Location</p>

            <div className="description">
              <h3>North forest in Russia</h3>
              <p>Starting from 250 USD/night</p>
            </div>
          </div>

          <div className="image-holder">
            <img src={Cabin} alt="" />

            <span className="material-symbols-outlined">trending_flat</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
