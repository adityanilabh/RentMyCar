import React from "react";
import "./Intro.css";
export default function Intro() {
  return (
    <div className="Intro">
      <div className="IntroHeading">
        <h2 id="welcome">Welcome</h2>
        <h1>Our Services</h1>
      </div>
      <div className="IntroContent">
        <div className="IntroContents">
          <h4>RAPID CITY TRANSFER</h4>
          <p>
            We will bring you quickly and comfortably to anywhere in your city
          </p>
        </div>
        <div className="IntroContents">
          <h3>BOOKING A HOTEL</h3>
          <p>
            If you need a comfortable hotel, our operators will book it for you,
            and take a taxi to the address
          </p>
        </div>
        <div className="IntroContents">
          <h3>AIRPORT TRANSFER</h3>
          <p>
            We will bring you quickly and comfortably to anywhere in your city
          </p>
        </div>
        <div className="IntroContents">
          <h3>BAGGAGE TRANSPORT</h3>
          <p>
            If you need a comfortable hotel, our operators will book it for you,
            and take a taxi to the address
          </p>
        </div>
      </div>
    </div>
  );
}
