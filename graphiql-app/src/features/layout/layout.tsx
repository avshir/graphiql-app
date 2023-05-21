import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../components/footer';
import Header from '../../components/header';
import { useScroll } from 'framer-motion';
import { OFFSET_Y_SCROLL } from '../../utils/animation-data';

const Layout: FC = () => {
  const { scrollY } = useScroll();
  const offsetY = OFFSET_Y_SCROLL;

  return (
    <div className="wrapper">
      <Header scrollY={scrollY} offsetY={offsetY} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
