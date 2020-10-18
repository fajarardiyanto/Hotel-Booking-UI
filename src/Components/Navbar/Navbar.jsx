import React from "react";

import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";

function NavbarBottom() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="nav__bottom">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ margin: "5px 0 5px 100px" }}
        >
          <Nav className="mr-auto">
            <Nav.Link href="/" className="mr__nav__link">
              ALL DEALS
            </Nav.Link>
            <Nav.Link href="/" className="mr__nav__link">
              HOTELS
            </Nav.Link>
            <Nav.Link href="/" className="mr__nav__link">
              ACTIVITIES
            </Nav.Link>
            <Nav.Link href="/" className="mr__nav__link">
              HOTEL DAY PACKAGES
            </Nav.Link>
            <Nav.Link href="/" className="mr__nav__link">
              RESTAURANT
            </Nav.Link>
            <Nav.Link href="/" className="mr__nav__link">
              EVENT
            </Nav.Link>
            <Nav.Link href="/" className="mr__nav__link">
              RODRIGUES
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarBottom;
