import React, { useState } from 'react';

import './auth-form.scss';

interface IAuthFormProps {
  titleBtn: string;
  handleClick: (email: string, pass: string) => void;
}

const AuthForm = ({ titleBtn, handleClick }: IAuthFormProps) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="auth-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password min 6 symbols"
      />
      <button className="btn btn-primary" onClick={() => handleClick(email, pass)}>
        {titleBtn}
      </button>
    </div>
  );
};

export default AuthForm;
