import './modal-style.scss';

import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { setErrorDataCheck } from '../../features/apiSlice';
import { setErrorSchemaCheck } from '../../features/schemaSlice';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';

interface ModalProps {
  setModalOpen: (isModalOpen: boolean) => void;
}

export default function Modal({ setModalOpen }: ModalProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { errorData } = useAppSelector((state) => state.data);
  const { errorSchema } = useAppSelector((state) => state.schema);

  const handleClick = () => {
    setModalOpen(false);
    if (errorData) {
      dispatch(setErrorDataCheck(false));
    }
    if (errorSchema) {
      dispatch(setErrorSchemaCheck(false));
    }
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
