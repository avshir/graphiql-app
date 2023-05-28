import './headers-editor.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setOpenStateHeaders } from '../../features/slices/stateHeadersSectionSlice';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { aura } from '@uiw/codemirror-theme-aura';

export default function HeadersEditor() {
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState(false);

  const stateHeadersSection: boolean = useAppSelector((state) => state.isOpenHeadersSection.value);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(setOpenStateHeaders(isOpen));
  }, [dispatch, isOpen]);

  useEffect(() => {
    setOpen(stateHeadersSection);
  }, [stateHeadersSection]);

  return (
    <>
      <div
        className="variables-editor-container card border-dark mb-3"
        style={
          stateHeadersSection
            ? { height: '15%', transition: 'height 0.3s' }
            : { height: '6%', transition: 'height 0.3s' }
        }
      >
        <button className="variables-btn btn btn-primary" onClick={handleClick}>
          Headers
        </button>
        <CodeMirror
          className="variables-editor"
          style={
            stateHeadersSection
              ? { opacity: '1', transition: 'opacity 1.5s' }
              : { opacity: '0', transition: 'opacity 0.05s' }
          }
          theme={aura}
          extensions={[json()]}
        />
      </div>
    </>
  );
}
