import React, { useState } from "react";

// internal imports
import { HeaderTop as Container } from "../../../styles/Home/Header/Header.styles";
import DropdownIcon from "../../../images/dropdown.png";
import { ComponentWrapper } from "../../common/ComponentWrapper";

// TODO: move to another file
const currencyNames = ["USD", "EUR"];

function HeaderTop() {
  const [currentCurrency, setCurrentCurrency] = useState(currencyNames[0]);
  const [state, setState] = useState(false);
  return (
    <ComponentWrapper>
      <Container>
        <ul className="info">
          <li>
            <small>Telephone: </small>
            <small>
              <a href="tel:01624938493">+88 01624938493</a>
            </small>
          </li>
          <li>
            <small>Mail: </small>
            <small>
              <a href="mailto:epuma2903@gmail.com">epuma2903@gmail.com</a>
            </small>
          </li>
        </ul>
        {/* dropdown */}
        <div onClick={() => setState(!state)} className="dropdown ">
          <small>{currentCurrency}</small>
          {state ? (
            <img
              className="dropdown-icon dropdown-up"
              src={DropdownIcon}
              alt=""
            />
          ) : (
            <img className="dropdown-icon" src={DropdownIcon} alt="" />
          )}
        </div>
      </Container>
    </ComponentWrapper>
  );
}

export default HeaderTop;
