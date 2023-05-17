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
      welcome: {
        project: {
          heading: 'about the project',
          description: 'bla-bla-bla',
        },
        course: {
          heading: 'rs school react course',
          description: 'free-of-charge learning for everyone',
        },
        team: {
          heading: 'our team',
          creator1: {
            name: 'Denis',
            obligations: {
              obl1: 'team lead',
              obl2: 'project configuration',
              obl3: 'qraphql playground',
            },
          },
          creator2: {
            name: 'Tatiana',
            obligations: {
              obl1: 'main design',
              obl2: 'localization',
              obl3: 'error boundary',
            },
          },
          creator3: {
            name: 'Anna',
            obligations: {
              obl1: 'authorization',
              obl2: 'validation',
              obl3: 'routes',
            },
          },
        },
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
      welcome: {
        project: {
          heading: 'о проекте',
          description: 'bla-bla-bla',
        },
        course: {
          heading: 'курс по react от rs school ',
          description: 'бесплатное обучение для всех',
        },
        team: {
          heading: 'наша команда',
          creator1: {
            name: 'Денис',
            obligations: {
              obl1: 'тим лид',
              obl2: 'конфигурация проекта',
              obl3: 'qraphql песочница',
            },
          },
          creator2: {
            name: 'Татьяна',
            obligations: {
              obl1: 'основной дизайн',
              obl2: 'локализация',
              obl3: 'обработка ошибок',
            },
          },
          creator3: {
            name: 'Анна',
            obligations: {
              obl1: 'авторизация',
              obl2: 'валидация',
              obl3: 'роуты',
            },
          },
        },
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
