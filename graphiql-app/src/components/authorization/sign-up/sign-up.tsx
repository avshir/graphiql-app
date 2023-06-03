import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import AuthForm from '../auth-form/auth-form';
import { useAppDispatch } from './../../../utils/hooks';
import { setUser } from '../../../features/slices/userSlice';
import ErrorMessage from '../error-message';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [error, setError] = useState(false);
  const [typeError, setTypeError] = useState('');

  const handlerRegister = async (email: string, password: string) => {
    const auth = getAuth();
    setError(false);

    createUserWithEmailAndPassword(auth, email, password)
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

        if (error.code === 'auth/email-already-in-use') {
          setTypeError('emailAlreadyInUse');
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
      <AuthForm titleBtn={t('buttons.register')} handleClick={handlerRegister} />
    </>
  );
};

export default SignUp;
