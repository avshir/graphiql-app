import './request-editor.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setRequest } from '../../features/requestSlice';
import { ChangeEvent, useEffect, useState } from 'react';

export default function RequestEditor() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.query.value) as string;
  const [content, setContent] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setContent(value);
  };

  useEffect(() => {
    setContent(query);
  }, [query]);

  useEffect(() => {
    dispatch(setRequest(content));
  }, [dispatch, content]);

  return (
    <div className="request-editor glass-effect">
      <h5 className="header-section">Operation</h5>
      <textarea className="request-editor-textarea" value={content} onInput={handleChange} />
    </div>
  );
}
