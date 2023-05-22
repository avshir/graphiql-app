import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SignUp from './../../components/authorization/sign-up';

import './register-page.scss';

const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <div className="register-page container">
      <div className="register-page__block auth-form__block">
        <SignUp />
        <div className="text-warning mb-4">
          {t('questionsForNav.haveAccount')}
          <Link to="/login" className="btn btn-link">
            {t('buttons.signIn')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
