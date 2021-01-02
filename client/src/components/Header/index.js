import React, { useState } from "react";
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
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
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
