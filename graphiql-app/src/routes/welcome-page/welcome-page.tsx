import Project from '../../components/content/welcome-page/project';
import Course from '../../components/content/welcome-page/course';
import Cards from '../../components/cards/welcome-page';

import './welcome-page.scss';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <Project></Project>
      <Cards></Cards>
      <Course></Course>
    </div>
  );
};

export default WelcomePage;
