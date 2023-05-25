import './response-section.scss';
import { useAppSelector } from '../../utils/hooks';
import { useEffect, useState } from 'react';
import Spinner from '../spinner';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { aura } from '@uiw/codemirror-theme-aura';

export default function ResponseSection() {
  const { list, loading } = useAppSelector((state) => state.data);
  const [currentData, setCurrentData] = useState('');

  useEffect(() => {
    setCurrentData(list);
  }, [list]);

  return (
    <div className="response-container">
      <h5 className="header-section card-title">Response</h5>
      {loading ? <Spinner /> : <></>}
      <CodeMirror
        className="response-container-content"
        value={
          JSON.stringify(currentData, null, ' ') === '""'
            ? ''
            : `${JSON.stringify(currentData, null, ' ')}`
        }
        theme={aura}
        extensions={[json()]}
      />
    </div>
  );
}
