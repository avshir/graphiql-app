import './error-page.scss';

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ErrorPage() {
  const { t } = useTranslation();
  return (
    <div className="error-page bg-primary">
      <div className="container">
        <h1 className="text-center">ErrorPage</h1>
        <div className="m-5 text-center">
          <NavLink className="btn btn-secondary" to="/main">
            {t('error.redirect')}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
