import React, { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useScroll } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';

import { useAppSelector } from '../../utils/hooks';
import Footer from '../../components/footer';
import Header from '../../components/header';
import AlertMessage from '../../components/error';
import Modal from '../../components/modal';

import { OFFSET_Y_SCROLL } from '../../utils/animation-data';

const Layout: FC = () => {
  const { scrollY } = useScroll();
  const offsetY = OFFSET_Y_SCROLL;
  const { error } = useAppSelector((state) => state.data);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setModalOpen(true);
    }
  }, [error]);

  return (
    <div className="wrapper">
      <Header scrollY={scrollY} offsetY={offsetY} />
      <main className="main">
        <ErrorBoundary FallbackComponent={AlertMessage}>
          <Outlet />
        </ErrorBoundary>
        {isModalOpen && <Modal setModalOpen={setModalOpen} />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
