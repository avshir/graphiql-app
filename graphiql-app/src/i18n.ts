import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        sign: 'sign',
      },
      footer: {
        creator1: 'Denis',
        creator2: 'Tatiana',
        creator3: 'Anna',
      },
      error: {
        redirect: 'To main page',
      },
    },
  },
  ru: {
    translation: {
      header: {
        sign: 'выйти',
      },
      footer: {
        creator1: 'Денис',
        creator2: 'Татьяна',
        creator3: 'Анна',
      },
      error: {
        redirect: 'На главную',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
});

export default i18n;
