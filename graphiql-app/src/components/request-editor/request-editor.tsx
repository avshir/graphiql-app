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
    <>
      <textarea className="request-editor" value={content} onInput={handleChange} />
    </>
  );
}
