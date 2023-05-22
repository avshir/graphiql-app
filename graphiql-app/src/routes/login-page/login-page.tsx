import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Login from './../../components/authorization/login';

import './login-page.scss';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="login-page container">
      <div className="login-page__block auth-form__block">
        <Login />
        <div className="text-warning mb-4">
          {t('questionsForNav.notRegistered')}
          <Link to="/register" className="btn btn-link">
            {t('buttons.register')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
