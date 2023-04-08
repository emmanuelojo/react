import React from "react";

function Navbar() {
  return (
    <nav>
      <div>
        <span className="icon material-symbols-outlined">drag_handle</span>

        <p>TheCabin</p>
      </div>

      <div className="search">
        <div className="search-icon">
          <span className="icon material-symbols-outlined">search</span>
        </div>
        <input type="text" placeholder="Search for location..." />
      </div>

      <div className="profile">
        <div className="price">
          <div className="number">2</div>
          <p>$250.00</p>
        </div>
        <img src="https://picsum.photos/200/300.webp" alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
