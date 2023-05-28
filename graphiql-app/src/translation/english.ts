const ENGLISH_LANG = {
  header: {
    signOut: 'Sign out',
    signIn: 'Sign in',
    signUp: 'Sign up',
    main: 'Main page',
  },
  footer: {
    creator1: 'Denis',
    creator2: 'Tatiana',
    creator3: 'Anna',
  },
  welcome: {
    project: {
      heading: 'about the project',
      description: 'make a request and learn everything about continents, countries and languages',
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
          obl3: 'error handling',
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
    message: 'Not found',
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
  errorBoundaries: {
    alert: {
      message: 'Something went wrong!',
      instructions: 'Try to close this message or reload the page.',
    },
  },
  errorApi: {
    message: 'Something went wrong!',
    instructions: 'Try to close this message or reload the page.',
    button: 'close',
  },
};

export default ENGLISH_LANG;
