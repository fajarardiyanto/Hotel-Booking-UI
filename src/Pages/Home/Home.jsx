import React from "react";

import { packageList } from "../../Data/TripPackage";
import { activitiesList } from "../../Data/Activities";

import AboutUs from "../../Components/Carousel/AboutUs";
import NavbarBottom from "../../Components/Navbar/Navbar";
import CardPackage from "../../Components/Card/CardPackage";
import NavbarHome from "../../Components/Navbar/NavbarHome";
import CardActivities from "../../Components/Card/CardActivities";
import FooterJumbotron from "../../Components/Jumbotron/FooterJumbotron";
import FooterBottomJumbotron from "../../Components/Jumbotron/FooterBottomJumbotron"

function Home() {
  return (
    <div>
      <NavbarHome />
      <NavbarBottom />
      <CardPackage trips={packageList} />
      <AboutUs />
      <FooterJumbotron />
      <CardActivities activities={activitiesList} />
      <FooterBottomJumbotron />
    </div>
  );
}

export default Home;
