import './request-editor.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setRequest } from '../../features/requestSlice';
import { useCallback, useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { aura } from '@uiw/codemirror-theme-aura';
import { fetchData } from '../../features/apiSlice';

interface IVariables {
  [key: string]: string;
}

export default function RequestEditor() {
  const dispatch = useAppDispatch();
  const contentQuery = useAppSelector((state) => state.query.value) as string;
  const [content, setContent] = useState('');

  const query: string = useAppSelector((state) => state.request.value);
  const variables: IVariables = useAppSelector((state) => state.variables.value);

  const [requestQuery, setRequestQuery] = useState('');

  const handleChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  useEffect(() => {
    setContent(contentQuery);
  }, [contentQuery]);

  useEffect(() => {
    dispatch(setRequest(content));
  }, [dispatch, content]);

  useEffect(() => {
    const splitQuery = query.split('\n');
    const cloneSplitQuery = splitQuery.slice();

    for (const key in variables) {
      cloneSplitQuery.forEach((elemQuery, index) => {
        const newElemQuery =
          elemQuery.includes(`${key}(code:`) || elemQuery.includes(`${key} (code:`)
            ? `  ${key}(code: "${variables[key]}") {`
            : elemQuery;
        cloneSplitQuery[index] = newElemQuery;
      });
    }

    const resultQuery = cloneSplitQuery.join('\n');

    setRequestQuery(resultQuery);
  }, [query, variables]);

  const handleClick = async (): Promise<void> => {
    dispatch(fetchData(requestQuery));
  };

  return (
    <div className="request-editor glass-effect">
      <h5 className="header-section">Operation</h5>
      <button className="request-btn" onClick={handleClick}></button>
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
