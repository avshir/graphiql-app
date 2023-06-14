import { useNavigate } from 'react-router-dom';
import './logo-style.scss';
import { useEffect, useState } from 'react';

export default function Logo() {
  const navigate = useNavigate();
  const [isClick, setClick] = useState(false);

  const handleClick = () => {
    localStorage.removeItem('page');
    setClick(true);
    navigate('/welcome');
  };

  useEffect(() => {
    if (!localStorage['page']) {
      navigate('/welcome');
    }

    setClick(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClick]);

  return (
    <div className="header-logo" onClick={handleClick}>
      countries API
    </div>
  );
}
