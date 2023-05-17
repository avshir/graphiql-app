import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
          'Enter at least one uppercase and one lowercase letter, one digit and one special character',
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
          'Введите как минимум одну прописную и одну строчную букву, одну цифру и один спец.символ',
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
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
});

export default i18n;
