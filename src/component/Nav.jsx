import React from "react";
import { Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";

const Nav = () => {
  return (
    <div>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <Link to="/">
            <strong className="white-text">Google Books</strong>
          </Link>
        </MDBNavbarBrand>
      </MDBNavbar>
    </div>
  );
};

export default Nav;
