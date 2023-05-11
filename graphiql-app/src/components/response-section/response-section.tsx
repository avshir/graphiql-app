import './response-section.scss';
import { useAppSelector } from "../../utils/hooks";
import { useEffect, useState } from 'react';

export default function ResponseSection() {
  const data = useAppSelector((state) => state.data.list);
  const [currentData, setCurrentData] = useState('');

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  return (
    <>
      <pre>{JSON.stringify(currentData)}</pre>
    </>
  );
}
