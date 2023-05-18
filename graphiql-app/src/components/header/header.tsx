import './header-style.scss';

import { NavLink, useNavigate, Link } from 'react-router-dom';
import { useTransform, motion, MotionValue } from 'framer-motion';
import { useAppDispatch } from './../../utils/hooks';

import Logo from './logo';
import Sign from './sign';
import Localization from './localization';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../features/slices/userSlice';
import { HEADER_HIGHT } from '../../utils/animation-data';

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
      <div className="header-content">
        <Logo />
        <div className="header-btns">
          {authBtns}
          {sighOutBtn}
          <Localization />
        </div>
      </div>
      {/* TODO => delete when project is complete */}
      <nav className={'nav-menu'}>
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
