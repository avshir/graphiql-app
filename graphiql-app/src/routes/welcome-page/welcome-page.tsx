import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import { useAuth } from '../../hooks/use-auth';
import Project from '../../components/content/welcome-page/project';
import Course from '../../components/content/welcome-page/course';
import Cards from '../../components/cards/welcome-page';
import { OFFSET_Y_SCROLL } from '../../utils/animation-data';

import './welcome-page.scss';

const WelcomePage = () => {
  const { scrollY } = useScroll();
  const offsetY = OFFSET_Y_SCROLL;
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  const { isAuth } = useAuth();
  const isAuthLS: string = localStorage.getItem('userIsAuth') || '';

  const content =
    isAuth || isAuthLS ? (
      <Link className="btn bg-primary" to="/main">
        to Main page
      </Link>
    ) : (
      <>
        <Link className="btn bg-primary" to="/login">
          Sign In
        </Link>
        <Link className="btn bg-primary" to="/register">
          Sign Up
        </Link>
      </>
    );

  return (
    <motion.main className="welcome-page" style={{ marginTop }}>
      <div className="btn__container">{content}</div>
      <Project></Project>
      <Cards></Cards>
      <Course></Course>
    </motion.main>
  );
};

export default WelcomePage;
