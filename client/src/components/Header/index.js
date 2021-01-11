import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { NavDropdown } from "react-bootstrap";

import { logout } from "./../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const userLogin = useSelector((state) => state.login);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const { userInfo } = userLogin;
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <LinkContainer to="/">
            <NavbarBrand>Ecommerce</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LinkContainer to="/cart">
                  <NavLink>Cart</NavLink>
                </LinkContainer>
              </NavItem>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <NavItem>
                    <LinkContainer to="/signup">
                      <NavLink>Signup</NavLink>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/signin">
                      <NavLink>Signin</NavLink>
                    </LinkContainer>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
