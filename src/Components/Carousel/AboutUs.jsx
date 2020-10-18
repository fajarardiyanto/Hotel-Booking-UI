import React from "react";

import "./AboutUs.css";
import Profile from "../../Images/profile.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  const starIcon = (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "#F2994A", width: "12px", height: "12px" }}
    />
  );

  return (
    <div>
      <h1 className="title__aboutus">WHAT PEOPLE THINKS ABOUT US</h1>
      <div className="bg__about-us">
        <img src={Profile} alt="profile" className="img__about-us" />
        <div>
          <h5 className="name__about-us">Gabrille</h5>
          <h5 className="date__about-us">18 Nov, 2020</h5>
          <span>
            {starIcon}
            {starIcon}
          </span>
        </div>
        <p className="text__about-us">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
          necessitatibus officia, iure iusto laudantium a nostrum quibusdam
          quasi! Quaerat quas unde labore voluptatibus nobis consequuntur
          placeat officiis aliquid optio obcaecati
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
