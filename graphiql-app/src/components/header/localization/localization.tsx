import './localization-style.scss';
import langIcon from '../../../assets/icons/tongue.png';

import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { LANGUAGE_DATA } from './data';
import { getDefaultLanguage } from '../../../utils/default-language';

export default function Localization() {
  const [isLangOpen, setLangOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLangOpen = () => {
    if (!isLangOpen) {
      setLangOpen(true);
    } else {
      setLangOpen(false);
    }
  };

  const handleLangSwitch = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLLabelElement;

    if (target.nodeName === 'LABEL') {
      const language = LANGUAGE_DATA[target.id as keyof typeof LANGUAGE_DATA].id;

      i18n.changeLanguage(language);
      localStorage.setItem('app-language', language);
      setLangOpen(false);
    }
  };

  return (
    <div className="header-localization">
      <div className="header-dropdown dropdown-toggle" onClick={handleLangOpen}>
        <img src={langIcon} width="50" alt="tongue" />
      </div>
      <div className={`dropdown-menu ${isLangOpen ? 'show' : ''}`} onClick={handleLangSwitch}>
        <input
          type="radio"
          className="btn-check"
          name="btn-dropdown"
          id="btn-dropdown1"
          autoComplete="off"
          defaultChecked={getDefaultLanguage() === 'en'}
        />
        <label id="en" className="dropdown-item" htmlFor="btn-dropdown1">
          {LANGUAGE_DATA.en.name}
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btn-dropdown"
          id="btn-dropdown2"
          autoComplete="off"
          defaultChecked={getDefaultLanguage() === 'ru'}
        />
        <label id="ru" className="dropdown-item" htmlFor="btn-dropdown2">
          {LANGUAGE_DATA.ru.name}
        </label>
      </div>
    </div>
  );
}
