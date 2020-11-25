import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";

const Nav = () => {
  return (
    <div>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Google Books</strong>
        </MDBNavbarBrand>
      </MDBNavbar>
    </div>
  );
};

export default Nav;
