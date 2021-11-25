import React from "react";
import "./Driver.css";

export default function Driver() {
  return (
    <div className="Driver">
      <div className="DriverContent">
        <br />
        <h3>For Drivers</h3>
        <h1>Want to Earn With Us</h1>
        <br />

        <p>
          Quisque sollicitudin feugiat risus, eu posuere ex euismod eu.
          Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros
          sodales ante, euismod aliquet nulla metus a mauris.
        </p>
        <br />
        <br />
        <table id="DriverTable">
          <tr id="DriverTableRow">
            <th>
              <span style={{ color: "yellow" }}>
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp; Luxurious Car
            </th>
            <th>
              <span style={{ color: "yellow" }}>
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp; Fixed Price
            </th>
          </tr>
          <tr>
            <th>
              <span style={{ color: "yellow" }}>
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp; No Fees
            </th>
            <th>
              <span style={{ color: "yellow" }}>
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp; Good Applications
            </th>
          </tr>
          <tr>
            <th>
              <span style={{ color: "yellow" }}>
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp; Weekly Payments
            </th>
            <th>
              <span style={{ color: "yellow" }}>
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp; Stable Orders
            </th>
          </tr>
        </table>
        <br />
        <a className="DriverSignup" href="#">
          Become a Driver
        </a>
      </div>
      <div className="DriverImage"></div>
    </div>
  );
}
