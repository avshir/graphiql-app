import './documentation-explorer.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { fetchSchema } from '../../features/schemaSlice';
import { IField, ISchema, MainQuery } from './explorer-types';

export default function DocumentationExplorer() {
  const dispatch = useAppDispatch();
  const dataSchema = useAppSelector((state) => state.schema.list) as ISchema;
  const [apiData, setApiData] = useState({} as MainQuery);

  useEffect(() => {
    dispatch(fetchSchema(''));
  }, [dispatch]);

  useEffect(() => {
    if (!!dataSchema.data) {
      const datas = dataSchema.data.__schema.types;

      const result: IField[] = datas.filter(
        (elem: IField) =>
          elem.name === 'Continent' || elem.name === 'Country' || elem.name === 'Language'
      );

      const mainQuery: MainQuery = {
        continent: result[0].fields,
        continents: result[0].fields,
        country: result[1].fields,
        countries: result[1].fields,
        language: result[2].fields,
        languages: result[2].fields,
      };

      //console.log(datas);
      console.log(mainQuery);
      setApiData(mainQuery);
    }
  }, [dataSchema]);

  return (
    <>
      <div className="query-container">
        {Object.keys(apiData).map((name: string, index: number) => (
          <button key={index}>{`{ ${name} }`}</button>
        ))}
      </div>
    </>
  );
}

//<pre>{JSON.stringify(fullApiData, null, ' ')}</pre>
