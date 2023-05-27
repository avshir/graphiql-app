import './alert-message-style.scss';

import { useEffect, useRef } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export default function AlertMessage({ resetErrorBoundary }: FallbackProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const errorLocation = useRef(location.pathname);

  const handleClick = () => {
    resetErrorBoundary();
  };

  useEffect(() => {
    if (location.pathname !== errorLocation.current) {
      resetErrorBoundary();
    }
  }, [location.pathname, resetErrorBoundary]);

  return (
    <div
      className="alert alert-dismissible alert-danger"
      style={{ width: 'fit-content', margin: '0 auto 0 auto' }}
    >
      <button type="button" className="btn-close" onClick={handleClick}></button>
      <h4 className="alert-heading">{t('errorBoundaries.alert.message')}</h4>
      <p className="alert-text">{t('errorBoundaries.alert.instructions')}</p>
    </div>
  );
}
