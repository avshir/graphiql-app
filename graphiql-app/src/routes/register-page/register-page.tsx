import React from 'react';
import { Link } from 'react-router-dom';

import SignUp from './../../components/authorization/sign-up';

import './register-page.scss';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <h1 className="text-center mb-4">Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
