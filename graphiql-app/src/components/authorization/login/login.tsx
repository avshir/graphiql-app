import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

import AuthForm from '../auth-form/auth-form';
import { useAppDispatch } from './../../../utils/hooks';
import { setUser } from '../../../features/slices/userSlice';
import ErrorMessage from '../error-message';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [error, setError] = useState(false);
  const [typeError, setTypeError] = useState('');

  const handlerLogin = (email: string, password: string) => {
    const auth = getAuth();
    setError(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );

        localStorage.setItem('page', 'main');
        navigate('/main');
      })
      .catch((error) => {
        setError(true);

        if (error.code === 'auth/wrong-password') {
          setTypeError('wrongPassword');
        } else if (error.code === 'auth/user-not-found') {
          setTypeError('userNotFound');
        } else if (error.code === 'auth/too-many-requests') {
          setTypeError('tooManyRequests');
        } else {
          setTypeError('unknownError');
        }
      });
  };

  const errorMessageBlock = error ? (
    <ErrorMessage
      errorTextMessage={t(`errorTextMessage.${typeError}`)}
      handleClick={() => setError(false)}
    />
  ) : null;

  return (
    <>
      {errorMessageBlock}
      <AuthForm titleBtn={t('buttons.signIn')} handleClick={handlerLogin} />
    </>
  );
};

export default Login;
