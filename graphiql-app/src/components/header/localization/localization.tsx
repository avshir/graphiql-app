import './localization-style.scss';

import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function Localization() {
  const { i18n } = useTranslation();
  const handleClick = (event: MouseEvent<HTMLLabelElement>) => {
    const target = event.target as HTMLLabelElement;
    if (target.htmlFor === 'btnradio1') {
      i18n.changeLanguage('en');
    }
    if (target.htmlFor === 'btnradio2') {
      i18n.changeLanguage('ru');
    }
  };

  return (
    <div className={'header-localization'}>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          defaultChecked
        />
        <label className="btn btn-outline-light" htmlFor="btnradio1" onClick={handleClick}>
          en
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
        />
        <label className="btn btn-outline-light" htmlFor="btnradio2" onClick={handleClick}>
          рус
        </label>
      </div>
    </div>
  );
}
