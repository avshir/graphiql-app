import { useEffect, useState } from 'react';
import { fetchData } from '../features/apiSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.list);
  const [currentData, setCurrentData] = useState('');

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  const handleClick = async (): Promise<void> => {
    const query = `query Query {
      country(code: "BR") {
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }`;

    dispatch(fetchData(query));
  };

  return (
    <>
      <div>
        <h1>MainPage</h1>
        <button onClick={handleClick}>Request</button>
      </div>
      <p>{JSON.stringify(currentData)}</p>
    </>
  );
}
