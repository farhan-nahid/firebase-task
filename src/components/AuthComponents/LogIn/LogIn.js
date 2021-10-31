import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <section className='login__register__form container'>
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email Address'
          />
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Your Password'
          />
          <input type='submit' value='Log In' />
        </form>
        <p>
          New to Our Site ? <Link to='/register'>Register</Link>
        </p>
        <h3>------------------- OR -------------------</h3>
        <button onClick={signInUsingGoogle}>Google Sign In</button>
      </div>
    </section>
  );
};

export default LogIn;
