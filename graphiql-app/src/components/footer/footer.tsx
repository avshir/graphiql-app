import './footer-style.scss';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';

import AlertMessage from '../error';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-dark">
      <ErrorBoundary FallbackComponent={AlertMessage}>
        <ul className="footer-list">
          <li className="footer-item">
            <img src={'https://svgshare.com/i/og2.svg'} width="40" alt="icon" />
            <Link to="https://github.com/dns147" target="_blank" rel="noreferrer">
              {t('footer.creator1')}
            </Link>
            <Link to="https://github.com/Tatiana-Shylovich" target="_blank" rel="noreferrer">
              {t('footer.creator2')}
            </Link>
            <Link to="https://github.com/avshir" target="_blank" rel="noreferrer">
              {t('footer.creator3')}
            </Link>
          </li>
          <li className="footer-item">
            <span>2023</span>
          </li>
          <li className="footer-item">
            <Link to="https://rs.school/react/" target="_blank" rel="noreferrer">
              <img
                className="img-active"
                src={'https://rs.school/images/rs_school_js.svg'}
                width="70"
                alt="icon"
              />
            </Link>
          </li>
        </ul>
      </ErrorBoundary>
    </footer>
  );
}
