import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import AuthForm from '../auth-form/auth-form';
import { useAppDispatch } from './../../../utils/hooks';
import { setUser } from '../../../features/slices/userSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate('/main');
      })
      .catch((error) => {
        console.error;
        console.log(error.code, error.message);
        alert(`User with email:${email} is not found. Try again!`);
      });
  };

  return <AuthForm titleBtn="sign in" handleClick={handlerLogin} />;
};

export default Login;
