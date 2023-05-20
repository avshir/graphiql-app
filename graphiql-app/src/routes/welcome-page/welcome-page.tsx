import { motion, useScroll, useTransform } from 'framer-motion';

import Project from '../../components/content/welcome-page/project';
import Course from '../../components/content/welcome-page/course';
import Cards from '../../components/cards/welcome-page';
import { OFFSET_Y_SCROLL } from '../../utils/animation-data';

import './welcome-page.scss';

const WelcomePage = () => {
  const { scrollY } = useScroll();
  const offsetY = OFFSET_Y_SCROLL;
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <motion.div className="welcome-page" style={{ marginTop }}>
      <Project></Project>
      <Cards></Cards>
      <Course></Course>
    </motion.div>
  );
};

export default WelcomePage;
