import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setISOpen] = useState(false);

  const toggle = () => {
    setISOpen(!isOpen);
  };
  return (
    <Navbar color="info" light expand="md" className="px-3">
      <NavbarBrand>
        <Link to="/" className="text-white ml-2 text-decoration-none">
          GitFire App
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className="justify-content-end">
        <Nav navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => context.setUser(null)}
                className=" text-white"
                style={{ cursor: "pointer" }}
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className=" text-white">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className=" text-white">
                  Signin
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
