import { useEffect, useState } from 'react';
import { fetchData } from '../features/apiSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import RequestEditor from '../components/request-editor';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.list);
  const requestQuery = useAppSelector((state) => state.request.value);
  const [currentData, setCurrentData] = useState('');

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  const handleClick = async (): Promise<void> => {
    console.log(requestQuery)

    dispatch(fetchData(requestQuery));
  };

  return (
    <>
      <div>
        <h1>MainPage</h1>
        <div className="request-editor-container">
          <RequestEditor />
        </div>
        <button onClick={handleClick}>Request</button>
      </div>
      <p>{JSON.stringify(currentData)}</p>
    </>
  );
}
