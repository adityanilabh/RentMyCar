import React from "react";
import "./App.css";
export default function Navigation() {
  return (
    <div className="navigation-bar">
      <div className="navigationLogo">
        <h1>UniversalTravel</h1>
      </div>
      <div className="navigationContent">
        <a className="navigationLink" link="#" target="_self">
          Home
        </a>
        <a className="navigationLink" link="#" target="_self">
          Get Taxi
        </a>
        <a className="navigationLink" link="#" target="_self">
          Railway
        </a>
        <a className="navigationLink" link="#" target="_self">
          Bike
        </a>
        <a className="navigationLink" link="#" target="_self">
          Bus
        </a>
        <a className="navigationLink" link="#" target="_self">
          Others
        </a>
        <a className="navigationLink" link="#" target="_self">
          Contact Us
        </a>
      </div>
    </div>
  );
}
