import './cards-style.scss';

import { useTranslation } from 'react-i18next';

import { CARDS_DATA } from './data';

export default function Cards() {
  const { t } = useTranslation();
  return (
    <section className="cards">
      <h2 className="cards-heading">{t('welcome.team.heading')}</h2>
      <div className="cards-container">
        <>
          {CARDS_DATA.map((item, index) => {
            return (
              <div key={item.id} className="card border-dark">
                <div className="card-header">
                  <img src={item.icon} width="71" alt="earth" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{t(`welcome.team.creator${index + 1}.name`)}</h4>
                  <ul>
                    <li>{t(`welcome.team.creator${index + 1}.obligations.obl1`)}</li>
                    <li>{t(`welcome.team.creator${index + 1}.obligations.obl2`)}</li>
                    <li>{t(`welcome.team.creator${index + 1}.obligations.obl3`)}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </section>
  );
}
