import './header-style.scss';

import { NavLink } from 'react-router-dom';
import { useTransform, motion, MotionValue } from 'framer-motion';

import Logo from './logo';
import Sign from './sign';
import Localization from './localization';

interface HeaderProps {
  scrollY: MotionValue<number>;
  offsetY: number[];
}

export default function Header({ scrollY, offsetY }: HeaderProps) {
  const heightSizes = [200, 100];
  const height = useTransform(scrollY, offsetY, heightSizes);

  return (
    <motion.header className={'header navbar-dark bg-primary'} style={{ height }}>
      <div className={'header-content'}>
        <Logo></Logo>
        <Sign></Sign>
        <Localization></Localization>
      </div>
      {/* TODO => delete when project is complete */}
      <nav className={'nav-menu'}>
        <NavLink className={'nav-page'} to="/velcome">
          Velcome
        </NavLink>
        <NavLink className={'nav-page'} to="/main">
          Main
        </NavLink>
      </nav>
      {/* */}
    </motion.header>
  );
}
