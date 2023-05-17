import React from 'react';

interface IErrorMessageProps {
  errorTextMessage: string;
  handleClick: () => void;
}

const ErrorMessage = ({ errorTextMessage, handleClick }: IErrorMessageProps) => {
  return (
    <div className="alert alert-dismissible alert-danger">
      <span>{errorTextMessage}</span>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={handleClick}
      ></button>
    </div>
  );
};

export default ErrorMessage;
