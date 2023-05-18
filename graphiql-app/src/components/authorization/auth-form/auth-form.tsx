import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import './auth-form.scss';
import { IFormErrors } from './auth-form-utils';

interface IAuthFormProps {
  titleBtn: string;
  handleClick: (email: string, pass: string) => void;
}

interface IFormValues {
  email: string;
  pass: string;
}

const AuthForm = ({ titleBtn, handleClick }: IAuthFormProps) => {
  const { t } = useTranslation();

  const errorTextMessage: IFormErrors = {
    required: t('errorTextMessage.required'),
    emailPattern: t('errorTextMessage.emailPattern'),
    passwordPattern: t('errorTextMessage.passwordPattern'),
    minLength8: t('errorTextMessage.minLength8'),
    maxLength16: t('errorTextMessage.maxLength16'),
    maxLength30: t('errorTextMessage.maxLength30'),
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormValues>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const { email, pass } = data;
    handleClick(email, pass);
    reset();
  };

  return (
    <form className="auth-form mb-3" method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__item form-floating mb-3">
        <input
          className={
            isValid ? 'form__input form-control is-valid' : 'form__input form-control is-invalid'
          }
          type="text"
          id="floatingInput"
          placeholder="email name@example.com"
          {...register('email', {
            required: errorTextMessage.required,
            minLength: { value: 8, message: errorTextMessage.minLength8 },
            maxLength: { value: 30, message: errorTextMessage.maxLength30 },
            pattern: { value: /.+@\w+\.\w+/, message: errorTextMessage.emailPattern },
          })}
        ></input>
        <label htmlFor="floatingInput">{t('inputPlaceholder.email')}</label>
        {errors.email && (
          <div className="form__error invalid-feedback">{errors.email.message || 'Error!'}</div>
        )}
      </div>

      <div className="form__item form-floating mb-3">
        <input
          className={
            isValid ? 'form__input form-control is-valid' : 'form__input form-control is-invalid'
          }
          type="password"
          id="floatingPassword"
          placeholder="password"
          {...register('pass', {
            required: errorTextMessage.required,
            minLength: { value: 8, message: errorTextMessage.minLength8 },
            maxLength: { value: 16, message: errorTextMessage.maxLength16 },
            pattern: {
              value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
              message: errorTextMessage.passwordPattern,
            },
          })}
        ></input>
        <label htmlFor="floatingPassword">{t('inputPlaceholder.password')}</label>
        {errors.pass && (
          <div className="form__error invalid-feedback">{errors.pass.message || 'Error!'}</div>
        )}
      </div>

      <div className="d-grid">
        <button className="btn btn-lg btn-primary" type="submit" disabled={!isValid}>
          {titleBtn}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
