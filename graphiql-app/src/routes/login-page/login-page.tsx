import React from 'react';
import { Link } from 'react-router-dom';

import Login from './../../components/authorization/login';

import './login-page.scss';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="text-center mb-4">Login</h1>
      <Login />
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
