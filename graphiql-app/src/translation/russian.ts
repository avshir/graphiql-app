const RUSSIAN_LANG = {
  header: {
    signOut: 'Выйти',
    signIn: 'Войти',
    signUp: 'Регистрация',
    main: 'На главную',
  },
  footer: {
    creator1: 'Денис',
    creator2: 'Татьяна',
    creator3: 'Анна',
  },
  welcome: {
    project: {
      heading: 'о проекте',
      description: 'сделай запрос и узнай всё о континентах, странах и языках',
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
    message: 'Ничего не найдено',
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
  errorBoundaries: {
    alert: {
      message: 'Что-то пошло не так!',
      instructions: 'Попробуйте закрыть это сообщение или перезагрузить страницу.',
    },
  },
  errorApi: {
    message: 'Что-то пошло не так!',
    instructions: 'Попробуйте закрыть это сообщение или перезагрузить страницу.',
    button: 'закрыть',
  },
};

export default RUSSIAN_LANG;
