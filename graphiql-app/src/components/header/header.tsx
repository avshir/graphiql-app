import './header-style.scss';

import { NavLink, useNavigate } from 'react-router-dom';
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

  return (
    <motion.header className="header navbar-dark bg-primary" style={{ height }}>
      <div className="header-content">
        <Logo></Logo>
        {sighOutBtn}
        <Localization></Localization>
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
