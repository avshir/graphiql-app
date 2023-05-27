import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getDefaultLanguage } from './utils/default-language';
import ENGLISH_LANG from './translation/english';
import RUSSIAN_LANG from './translation/russian';

const resources = {
  en: {
    translation: ENGLISH_LANG,
  },
  ru: {
    translation: RUSSIAN_LANG,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getDefaultLanguage(), // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
});

export default i18n;
