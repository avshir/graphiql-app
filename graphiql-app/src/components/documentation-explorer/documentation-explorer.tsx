import './documentation-explorer.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { fetchData } from '../../features/apiSlice';
import { fetchSchema } from '../../features/schemaSlice';

export default function DocumentationExplorer() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.schema.list);

  const [fullApiData, setFullApiData] = useState('');

  useEffect(() => {
    dispatch(fetchSchema(''));
  }, [dispatch]);

  useEffect(() => {
    console.log(data);

    setFullApiData(data);
  }, [data]);

  return (
    <>
      <div>
        <pre>{JSON.stringify(fullApiData, null, ' ')}</pre>
      </div>
    </>
  );
}
