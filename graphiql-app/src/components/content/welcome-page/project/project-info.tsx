import './project-info-style.scss';

import { useTranslation } from 'react-i18next';

import earthSourcingIcon from '../../../../assets/icons/sourcing.png';

export default function Project() {
  const { t } = useTranslation();
  return (
    <section className="project-info">
      <div className="project-info-container">
        <div className="project-info-logo">
          <img src={earthSourcingIcon} alt="earth" />
        </div>
        <div className="project-info-description">
          <h2 className="project-info-description__heading">{t('welcome.project.heading')}</h2>
          <p className="project-info-description__">blabla</p>
        </div>
      </div>
    </section>
  );
}
