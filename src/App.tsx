import { useState } from "react";
import logo from "./assets/svgs/logo.svg";
import "./assets/css/index.css";
import Cabin from "./assets/images/cabin2.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jungle from "./components/Jungle";

function App() {
  return (
    <div className="App">
      <Navbar />

      <aside>
        <div className="upside-down">
          <p className="white">01</p>
          <span>
            <p className="rotate">/</p>
            <p className="rotate">03</p>
          </span>
        </div>

        <div className="upside-down-bottom">
          <p className="text">#ai0aw</p>
          <span className="icon material-symbols-outlined">south</span>
        </div>
      </aside>

      <main>
        <div className="main-container">
          <div className="black-div"></div>
          <div className="main-image-holder">
            <img src={Cabin} />
          </div>
        </div>

        <div className="jungle">
          <Jungle />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
