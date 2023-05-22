import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getDefaultLanguage } from './utils/default-language';

const resources = {
  en: {
    translation: {
      header: {
        sign: 'Sign out',
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
      buttons: {
        signIn: 'Sign in',
        signUp: 'Sign up',
        register: 'Register',
      },
      questionsForNav: {
        haveAccount: 'Do you have already an account?',
        notRegistered: "Don't have an account?",
      },
      inputPlaceholder: {
        email: 'Email address',
        password: 'Password',
      },
      errorTextMessage: {
        required: 'Required field',
        emailPattern: 'Email must contain @ and .',
        passwordPattern:
          'Enter at least one uppercase and one lowercase letter, one digit and one special character like !@#$%^&*',
        minLength8: 'Enter at least 8 characters',
        maxLength16: 'Enter max 16 characters',
        maxLength30: 'Enter max 30 characters',
        unknownError: 'Error!',
        emailAlreadyInUse: 'User with this email already in use!',
        wrongPassword: 'Wrong password. Try again!',
        userNotFound: 'User with this email is not found!',
        tooManyRequests: 'Too many requests!',
      },
    },
  },
  ru: {
    translation: {
      header: {
        sign: 'Выйти',
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
      buttons: {
        signIn: 'Войти',
        signUp: 'Зарегистрироваться',
        register: 'Зарегистрироваться',
      },
      questionsForNav: {
        haveAccount: 'Уже есть аккаунт?',
        notRegistered: 'Еще нет аккаунта?',
      },
      inputPlaceholder: {
        email: 'Эл. почта',
        password: 'Пароль',
      },
      errorTextMessage: {
        required: 'Поле обязательно к заполнению',
        emailPattern: 'Эл.почта должна содержать знаки @ and .',
        passwordPattern:
          'Введите как минимум одну прописную и одну строчную букву, одну цифру и один спец.символ из !@#$%^&*',
        minLength8: 'Введите минимум 8 символов',
        maxLength16: 'Введите максимум 16 символов',
        maxLength30: 'Введите максимум 30 символов',
        unknownError: 'Ошибка!',
        emailAlreadyInUse: 'Пользователь с такой эл. почтой уже существует!',
        wrongPassword: 'Неверный пароль. Попробуйте снова!',
        userNotFound: 'Пользователь с такой эл. почтой не найден!',
        tooManyRequests: 'Слишком много запросов!',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getDefaultLanguage(), // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
});

export default i18n;
