import './course-info-style.scss';

import { useTranslation } from 'react-i18next';

import reactIcon from '../../../../assets/icons/react.png';

export default function Course() {
  const { t } = useTranslation();
  return (
    <section className="course-info">
      <div className="course-info-container">
        <div className="course-info-description">
          <h2 className="course-info-description__heading">{t('welcome.course.heading')}</h2>
          <p>{t('welcome.course.description')}</p>
        </div>
        <div className="course-info-logo">
          <img src={reactIcon} width="112" alt="earth" />
        </div>
      </div>
    </section>
  );
}
