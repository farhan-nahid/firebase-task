import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/home' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard' activeClassName='active'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' activeClassName='active'>
            <button>Login</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
