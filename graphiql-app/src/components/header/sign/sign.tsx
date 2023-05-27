import './sign-style.scss';
import { useTranslation } from 'react-i18next';

interface ISignProps {
  handleClick: () => void;
}

export default function Sign({ handleClick }: ISignProps) {
  const { t } = useTranslation();
  return (
    <button type="button" className="sign-out btn btn-outline-secondary" onClick={handleClick}>
      {t('header.signOut')}
    </button>
  );
}
