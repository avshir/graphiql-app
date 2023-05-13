import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/use-auth';

import './welcome-page.scss';

const WelcomePage = () => {
  const { isAuth } = useAuth();

  const content = isAuth ? (
    <Link className="btn bg-primary" to="/main">
      to Main page
    </Link>
  ) : (
    <>
      <Link className="btn bg-primary" to="/login">
        Sign In
      </Link>
      <Link className="btn bg-primary" to="/register">
        Sign Up
      </Link>
    </>
  );

  return (
    <div className="welcome-page">
      <div className="btn__container">{content}</div>
      <h1 className="text-center mb-4">Welcome Page</h1>
    </div>
  );
};

export default WelcomePage;
