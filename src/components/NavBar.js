import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavBar = props => {
  const { setGl } = props;
  return (
    <Nav>
      <Link to="/guestlist">Guest List</Link>
      <Link to="/rooms">Rooms</Link>
      <Link to="/accusation">Accusation</Link>
      <Link
        to="/"
        onClick={() => {
          setGl([]);
        }}
      >
        Restart
      </Link>
    </Nav>
  );
};

export default NavBar;
//restart
//go to a room
//make an accusation
//check the guest list
