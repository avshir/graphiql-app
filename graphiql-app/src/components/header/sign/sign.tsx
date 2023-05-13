import './sign-style.scss';
import { useTranslation } from 'react-i18next';

interface ISignProps {
  handleClick: () => void;
}

export default function Sign({ handleClick }: ISignProps) {
  return (
    <div className={'header-sign'}>
      <button type="button" className="btn btn-secondary" onClick={handleClick}>
        sign out
        {/* {t('header.sign')} */}
      </button>
    </div>
  );
}
