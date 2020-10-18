import React from "react";

import "./Navbar.css";
import Logo from "../../Images/Logo.png";

import DropdownUser from "../Dropdown/DropdownUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function NavbarHome() {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const shopCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className="nav__logo">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Location"
              className="mr-sm-2 nav__search"
            />
            <Button variant="danger icon__nav__search">{searchIcon}</Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="collapse__2">
          <span>{shopCartIcon}</span>
          <DropdownUser />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHome;
