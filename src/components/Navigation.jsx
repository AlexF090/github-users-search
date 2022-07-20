import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';

function Navigation() {
  return (
    <Navi>
      <NavList role="list">
        <NavigationLink to="/">
          <li>
            <HomeIcon />
            <p>Start</p>
          </li>
        </NavigationLink>
        <NavigationLink to="/favorites">
          <li>
            <StarIcon />
            <p>Favorites</p>
          </li>
        </NavigationLink>
      </NavList>
    </Navi>
  );
}

const Navi = styled.nav`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 6rem;
  position: fixed;
  bottom: 0;
  border-top: 2px solid white;
  background-color: #5097f3e8;
  z-index: 20;
`;

const NavList = styled.ul`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #ffbd31;
  list-style: none;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #ffbd31;
  &.active {
    text-decoration: none;
    color: #002c76;
  }
`;

const StarIcon = styled(AiFillStar)`
  font-size: 3em;
`;

const HomeIcon = styled(AiFillHome)`
  font-size: 3em;
`;

export default Navigation;
