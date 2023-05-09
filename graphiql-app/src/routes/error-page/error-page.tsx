import React from 'react';
import { NavLink } from 'react-router-dom';

import './error-page.scss';

export default function ErrorPage() {
  return (
    <div className="error-page bg-primary">
      <div className="container">
        <h1 className="text-center">ErrorPage</h1>
        <div className="m-5 text-center">
          <NavLink className="btn btn-secondary" to="/main">
            To main page
          </NavLink>
        </div>
      </div>
    </div>
  );
}
