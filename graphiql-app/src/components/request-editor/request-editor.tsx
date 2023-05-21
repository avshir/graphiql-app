import './request-editor.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setRequest } from '../../features/requestSlice';
import { useCallback, useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { aura } from '@uiw/codemirror-theme-aura';

export default function RequestEditor() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.query.value) as string;
  const [content, setContent] = useState('');

  const handleChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  useEffect(() => {
    setContent(query);
  }, [query]);

  useEffect(() => {
    dispatch(setRequest(content));
  }, [dispatch, content]);

  return (
    <div className="request-editor glass-effect">
      <h5 className="header-section">Operation</h5>
      <CodeMirror
        className="request-editor-textarea"
        value={content}
        theme={aura}
        extensions={[javascript({ jsx: true })]}
        onChange={handleChange}
      />
    </div>
  );
}
