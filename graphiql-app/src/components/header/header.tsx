import './header-style.scss';

import { NavLink, useNavigate, Link } from 'react-router-dom';
import { useTransform, motion, MotionValue } from 'framer-motion';
import { useAppDispatch } from './../../utils/hooks';
import { ErrorBoundary } from 'react-error-boundary';

import Logo from './logo';
import Sign from './sign';
import Localization from './localization';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../features/slices/userSlice';
import { HEADER_HIGHT } from '../../utils/animation-data';

import AlertMessage from '../error';

interface HeaderProps {
  scrollY: MotionValue<number>;
  offsetY: number[];
}

export default function Header({ scrollY, offsetY }: HeaderProps) {
  const height = useTransform(scrollY, offsetY, HEADER_HIGHT);

  const isAuthLS: string = localStorage.getItem('userIsAuth') || '';
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerSignOutBtn = () => {
    dispatch(removeUser());
    navigate('/welcome');
  };

  const sighOutBtn = isAuth || isAuthLS ? <Sign handleClick={handlerSignOutBtn} /> : null;
  const authBtns =
    isAuth || isAuthLS ? (
      <Link className="btn btn-secondary" to="/main">
        Main page
      </Link>
    ) : (
      <>
        <Link className="btn btn-outline-secondary" to="/login">
          Sign In
        </Link>
        <Link className="btn btn-outline-secondary" to="/register">
          Sign Up
        </Link>
      </>
    );

  return (
    <motion.header className="header navbar-dark bg-primary" style={{ height }}>
      <ErrorBoundary FallbackComponent={AlertMessage}>
        <div className="header-content container">
          <Logo />
          <div className="header-btns">
            <nav className="nav">
              {authBtns}
              {sighOutBtn}
            </nav>
            <Localization />
          </div>
        </div>
      </ErrorBoundary>
      {/* TODO => delete when project is complete */}
      <nav className={'nav-menu container'}>
        <NavLink className={'nav-page'} to="/welcome">
          Welcome
        </NavLink>
        <NavLink className={'nav-page'} to="/main">
          Main
        </NavLink>
      </nav>
    </motion.header>
  );
}
