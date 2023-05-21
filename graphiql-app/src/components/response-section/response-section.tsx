import './response-section.scss';
import { useAppSelector } from '../../utils/hooks';
import { useEffect, useState } from 'react';
import Spinner from '../spinner';

export default function ResponseSection() {
  const data = useAppSelector((state) => state.data.list);
  const [currentData, setCurrentData] = useState('');

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  return (
    <div className="response-container">
      <h5 className="header-section">Response</h5>
      <Spinner />
      <pre className="response-container-content">
        {JSON.stringify(currentData, null, ' ') === '""'
          ? ''
          : `${JSON.stringify(currentData, null, ' ')}`}
      </pre>
    </div>
  );
}
