import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
  const { loggedInUser, logOut } = useAuth();
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
        {!loggedInUser ? (
          <li>
            <NavLink to='/login'>
              <button>Login</button>
            </NavLink>
          </li>
        ) : (
          <>
            <li>{loggedInUser.displayName}</li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
