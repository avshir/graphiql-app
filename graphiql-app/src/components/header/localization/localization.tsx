import './localization-style.scss';
import langIcon from '../../../assets/icons/tongue.png';

import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

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
    if (target.id === 'en') {
      i18n.changeLanguage('en');
      setLangOpen(false);
    }
    if (target.id === 'ru') {
      i18n.changeLanguage('ru');
      setLangOpen(false);
    }
  };

  return (
    <div className="header-localization">
      <div className="header-dropdown dropdown-toggle" onClick={handleLangOpen}>
        <img src={langIcon} alt="tongue" />
      </div>
      <div className={`dropdown-menu ${isLangOpen ? 'show' : ''}`} onClick={handleLangSwitch}>
        <input
          type="radio"
          className="btn-check"
          name="btn-dropdown"
          id="btn-dropdown1"
          autoComplete="off"
          defaultChecked
        />
        <label id="en" className="dropdown-item" htmlFor="btn-dropdown1">
          english
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btn-dropdown"
          id="btn-dropdown2"
          autoComplete="off"
        />
        <label id="ru" className="dropdown-item" htmlFor="btn-dropdown2">
          русский
        </label>
      </div>
    </div>
  );
}
