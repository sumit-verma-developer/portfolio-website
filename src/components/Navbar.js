import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${'' /* border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}; */}

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  margin: 0 1rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#whatido">What I Do</NavLink>
      <NavLink href="#resume">Resume</NavLink>
      <NavLink href="#portfolio">Portfolio</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
