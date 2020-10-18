import React from "react";

import "./DropdownUser.css";
import Profile from "../../Images/profile.jpg";

import { useHistory } from "react-router-dom";
import { Dropdown, Image } from "react-bootstrap";

function DropdownUser() {
  let history = useHistory();

  const openProfile = () => {
    history.push(`/profile`);
  };

  const logoutAccount = () => {
    // localStorage.removeItem("token");
    history.push(`/`);
  };
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="flat"
          id="dropdown-menu-align-right"
          className="pps my-dropdown-toggle"
        >
          <Image
            src={Profile}
            alt="foto-profile"
            className="image__profile_xs"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="menu-dropdown">
          <span className="segitiga"></span>
          <div className="div-item">
            <Dropdown.Item
              onClick={() => openProfile()}
              className="text-profile btn-dropdown"
            >
              {/* <img src={Profile} className="dropdown-icon" alt="icon-user" /> */}
              Profile
            </Dropdown.Item>
          </div>
          <hr className="hr-dropdown" />
          <div className="div-logout-dropdown div-item">
            <Dropdown.Item
              onClick={() => logoutAccount()}
              className="text-profile"
            >
              Logout
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownUser;
