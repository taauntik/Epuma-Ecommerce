import React from "react";

// internal imports
import { Navbar as Container } from "../../../styles/Home/Header/Header.styles";
import EpumaLogo from "../../../images/Epuma-logo.png";
import SearchIcon from "../../../images/search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ComponentWrapper } from "../../common/ComponentWrapper";

function Navbar() {
  return (
    <ComponentWrapper>
      <Container>
        <div className="logo">
          <img src={EpumaLogo} alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Products" />
          <img
            className="search-icon"
            id="search-icon"
            src={SearchIcon}
            alt=""
          />
        </div>
        <div className="navigators">
          <ul>
            <li>
              <Link className="link" to="/">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li className="cart">
              <Link className="link" to="/">
                <FontAwesomeIcon className="icon" icon={faShoppingCart} />
              </Link>
              <span>2</span>
            </li>
          </ul>
        </div>
      </Container>
    </ComponentWrapper>
  );
}

export default Navbar;
