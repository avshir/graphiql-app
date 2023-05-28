import './request-editor.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setRequest } from '../../features/requestSlice';
import { useCallback, useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { aura } from '@uiw/codemirror-theme-aura';
import { fetchData } from '../../features/apiSlice';
import { setErrorDataCheck } from '../../features/apiSlice';

interface IVariables {
  [key: string]: string;
}

export default function RequestEditor() {
  const dispatch = useAppDispatch();
  const contentQuery = useAppSelector((state) => state.query.value) as string;
  const [content, setContent] = useState('');

  const query: string = useAppSelector((state) => state.request.value);
  const variables: IVariables = useAppSelector((state) => state.variables.value);
  const stateVariablesSection: boolean = useAppSelector(
    (state) => state.isOpenVariablesSection.value
  );

  const stateHeadersSection: boolean = useAppSelector((state) => state.isOpenHeadersSection.value);

  const [requestQuery, setRequestQuery] = useState('');

  const { errorDataCheck } = useAppSelector((state) => state.data);

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
    if (!errorDataCheck) {
      dispatch(setErrorDataCheck(true));
    }
  };

  return (
    <div
      className="request-editor card border-dark mb-3"
      style={
        stateVariablesSection && !stateHeadersSection
          ? { height: '64%', transition: 'height 0.3s' }
          : stateHeadersSection && !stateVariablesSection
          ? { height: '79%', transition: 'height 0.3s' }
          : !stateVariablesSection
          ? { height: '88%', transition: 'height 0.3s' }
          : stateVariablesSection && stateHeadersSection
          ? { height: '55%', transition: 'height 0.3s' }
          : {}
      }
    >
      <h5 className="header-section card-title">Operation</h5>
      <button className="request-btn btn btn-primary" onClick={handleClick}>
        <span className="request-btn-icon"></span>
        <span className="request-btn-name">Run</span>
      </button>
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
