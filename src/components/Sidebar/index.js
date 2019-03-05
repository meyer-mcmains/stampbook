import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { stampsType } from '../../types';

const NavBar = styled.div`
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;
  padding: 20px 35px 20px 15px;
  border-right: 1px solid #eee;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  margin: 10px;
  font-family: monospace;
  font-size: 18px;
  letter-spacing: 1.1px;
  min-width: 200px;
  padding: 5px;
  text-decoration: none;
`;

const active = {
  backgroundColor: '#FFF',
  color: '#0f0f0f'
};

const Sidebar = ({ stamps }) => (
  <NavBar>
    {stamps.map(stamp => (
      <StyledNavLink activeStyle={active} key={stamp.key} to={stamp.path}>
        {stamp.key}
      </StyledNavLink>
    ))}
  </NavBar>
);

Sidebar.propTypes = {
  stamps: stampsType
};

export default Sidebar;
