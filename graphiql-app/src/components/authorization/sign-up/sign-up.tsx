import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import AuthForm from '../auth-form/auth-form';
import { useAppDispatch } from './../../../utils/hooks';
import { setUser } from '../../../features/slices/userSlice';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerRegister = async (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };

  return <AuthForm titleBtn="register" handleClick={handlerRegister} />;
};

export default SignUp;
