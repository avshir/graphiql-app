import './header-style.scss';

import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useTransform, motion, MotionValue } from 'framer-motion';
import { useAppDispatch } from './../../utils/hooks';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import Logo from './logo';
import Sign from './sign';
import Localization from './localization';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../features/slices/userSlice';
import { HEADER_HIGHT } from '../../utils/animation-data';
import AlertMessage from '../error';
import useResize from '../../hooks/use-resize';

interface HeaderProps {
  scrollY: MotionValue<number>;
  offsetY: number[];
}

export default function Header({ scrollY, offsetY }: HeaderProps) {
  const height = useTransform(scrollY, offsetY, HEADER_HIGHT);
  const { t } = useTranslation();

  const isAuthLS: string = localStorage.getItem('userIsAuth') || '';
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const handleBurgerClick = () => {
    if (isBurgerOpen) {
      setBurgerOpen(false);
    } else {
      setBurgerOpen(true);
    }
  };

  const handlerSignOutBtn = () => {
    localStorage.removeItem('page');
    dispatch(removeUser());
    navigate('/welcome');
    if (isBurgerOpen) {
      setBurgerOpen(false);
    }
  };

  const handleLinkClick = () => {
    if (isBurgerOpen) {
      setBurgerOpen(false);
    }
  };

  const location = useLocation();
  const visibleBtnToMain =
    location.pathname === '/main' ? 'btn btn-secondary hide' : 'btn btn-secondary';

  const sighOutBtn = isAuth || isAuthLS ? <Sign handleClick={handlerSignOutBtn} /> : null;
  const authBtns =
    isAuth || isAuthLS ? (
      <Link className={visibleBtnToMain} to="/main" onClick={handleLinkClick}>
        {t('header.main')}
      </Link>
    ) : (
      <>
        <Link className="btn btn-outline-secondary" to="/login" onClick={handleLinkClick}>
          {t('header.signIn')}
        </Link>
        <Link className="btn btn-outline-secondary" to="/register" onClick={handleLinkClick}>
          {t('header.signUp')}
        </Link>
      </>
    );

  return (
    <motion.header className="header navbar-dark bg-primary" style={{ height }}>
      <ErrorBoundary FallbackComponent={AlertMessage}>
        <div className="header-content">
          <Logo />
          {useResize() ? (
            <>
              <Localization />
              <div className="header-btns">
                <nav className="nav">
                  {authBtns}
                  {sighOutBtn}
                </nav>
              </div>
            </>
          ) : (
            <>
              <div
                className={`burger-icon ${isBurgerOpen ? 'open' : ''}`}
                onClick={handleBurgerClick}
              >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className={`burger-menu ${isBurgerOpen ? 'open' : ''}`}>
                <div className="burger-btns">
                  <nav className="nav">
                    {authBtns}
                    {sighOutBtn}
                  </nav>
                </div>
                <Localization />
              </div>
            </>
          )}
        </div>
      </ErrorBoundary>
    </motion.header>
  );
}
