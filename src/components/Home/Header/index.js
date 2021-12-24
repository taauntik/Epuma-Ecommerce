import React from "react";

// internal imports
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import { Header as HeaderContainer } from "../../../styles/Home/Header/Header.styles";

function Header() {
  return (
      <HeaderContainer>
        <div>
          <HeaderTop />
          <Navbar />
        </div>
      </HeaderContainer>
  );
}

export default Header;
