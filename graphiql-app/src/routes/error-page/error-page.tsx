import './error-page.scss';

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ErrorPage() {
  const { t } = useTranslation();
  return (
    <div className="error-page">
      <div className="container">
        <h1 className="text-center text-warning">{t('error.message')}</h1>
        <div className="m-5 text-center">
          <NavLink className="btn btn-secondary" to="/main">
            {t('error.redirect')}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
