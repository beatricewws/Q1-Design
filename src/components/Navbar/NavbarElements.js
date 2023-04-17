import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #63D471;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const NavLink = styled(Link)`
  color: #808080;
  text-decoration: none;
  padding: 1rem;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: block;
  color: #808080;
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1;
`;

export const NavBtn = styled.nav`
  display: none;
`;

export const NavBtnLink = styled(Link)`
  display: none;
`;