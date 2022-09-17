import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <Nav>
      <div className='logo'>
        <Link to='/'>
          <h1>Country</h1>
        </Link>
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  align-items: center;
  padding: 0 2rem;
`;
