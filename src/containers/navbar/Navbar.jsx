import React from "react";
import * as X from "./navbarStyle";

const Navbar = ({ image }) => {
  return (
    <>
      <X.NavbarContainer>
        <X.NavbarWrapper>
          <h1> Dashboard </h1>
        </X.NavbarWrapper>
      </X.NavbarContainer>
    </>
  );
};

export default Navbar;
