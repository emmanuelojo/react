import React from "react";

const Jungle = () => {
  return (
    <div className="jungle-container">
      <div className="jungle-text">
        <h1>
          <span>Welcome</span> to the jungle
        </h1>

        <div className="booking">
          <button className="book">Book Now</button>

          <div className="booking-price">
            <p className="country">
              <span>Vietnam</span> from
            </p>

            <div className="amount">350USD/n</div>
          </div>
        </div>
      </div>

      <div className="controls">
        <div className="play">
          <span className="play-icon material-symbols-outlined">
            play_arrow
          </span>
        </div>

        <div className="btns">
          <div className="left-btn">
            <span className="material-symbols-outlined">trending_flat</span>
          </div>

          <div className="right-btn">
            <span className="material-symbols-outlined">trending_flat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jungle;
