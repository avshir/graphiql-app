import './project-info-style.scss';

import { useTranslation } from 'react-i18next';

import earthSourcingIcon from '../../../../assets/icons/sourcing.png';

export default function Project() {
  const { t } = useTranslation();
  return (
    <section className="project-info">
      <div className="project-info-container">
        <div className="project-info-logo">
          <img src={earthSourcingIcon} width="160" alt="earth" />
        </div>
        <div className="project-info-description">
          <h2 className="project-info-description__heading">{t('welcome.project.heading')}</h2>
          <p className="project-info-description__text">{t('welcome.project.description')}</p>
        </div>
      </div>
    </section>
  );
}
