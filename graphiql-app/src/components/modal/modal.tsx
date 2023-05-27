import './modal-style.scss';

import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface ModalProps {
  setModalOpen: (isModalOpen: boolean) => void;
}

export default function Modal({ setModalOpen }: ModalProps) {
  const { t } = useTranslation();

  const handleClick = () => {
    setModalOpen(false);
  };
  const blockClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-container" onClick={handleClick}>
      <div className="modal-dialog">
        <div className="modal-content" onClick={blockClick}>
          <div className="modal-header">
            <h5 className="modal-title">{t('errorApi.message')}</h5>
          </div>
          <div className="modal-body">
            <p>{t('errorApi.instructions')}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClick}>
              {t('errorApi.button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
