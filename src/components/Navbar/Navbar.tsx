import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../../styled-components/navbar/Nav";
import NavElement from "../../styled-components/navbar/NavElement";
import Colors from "../../utils/Colors";
import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Routes from "./Routes";
import NavLink from "../../styled-components/navbar/NavLink";

const Navbar: React.FC = () => {
  return (
    <Router>
      <Nav color={Colors.pink_main}>
        <div className="#link-1">
          <NavLink href="/">
            <AiFillHome size="30" />

            <NavElement>Home</NavElement>
          </NavLink>
        </div>
        <div className="#link-2">
          <NavLink href="/about">
            <CgProfile size="30" />
            <NavElement>Me</NavElement>
          </NavLink>
        </div>
        <div className="#link-3">
          <NavLink href="/contact">
            <AiFillContacts size="30" />

            <NavElement>Contact</NavElement>
          </NavLink>
        </div>
      </Nav>
      <Routes />
    </Router>
  );
};

export default Navbar;
