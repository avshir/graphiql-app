import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';

import { useAppSelector } from '../../utils/hooks';
import Footer from '../../components/footer';
import Header from '../../components/header';
import AlertMessage from '../../components/error';
import Modal from '../../components/modal';
import Preloader from '../../components/preloader';

import { OFFSET_Y_SCROLL } from '../../utils/animation-data';

const Layout: FC = () => {
  const { scrollY } = useScroll();
  const offsetY = OFFSET_Y_SCROLL;
  const marginTop = useTransform(scrollY, offsetY, offsetY);
  const { error } = useAppSelector((state) => state.data);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (error) {
      setModalOpen(true);
    }
  }, [error]);

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header scrollY={scrollY} offsetY={offsetY} />
          <motion.main className="main" style={{ marginTop }}>
            <ErrorBoundary FallbackComponent={AlertMessage}>
              <Outlet />
            </ErrorBoundary>
            {isModalOpen && <Modal setModalOpen={setModalOpen} />}
          </motion.main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
