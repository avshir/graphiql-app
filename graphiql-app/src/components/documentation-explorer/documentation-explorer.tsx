import './documentation-explorer.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { fetchSchema } from '../../features/schemaSlice';
import { IField, IFieldDatas, ISchema, MainQuery } from './explorer-types';

export default function DocumentationExplorer() {
  const dispatch = useAppDispatch();
  const dataSchema = useAppSelector((state) => state.schema.list) as ISchema;
  const [apiDatas, setApiDatas] = useState({} as MainQuery);

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
      setApiDatas(mainQuery);
    }
  }, [dataSchema]);

  return (
    <>
      <div className="query-container">
        {Object.keys(apiDatas).map((keyName: string, index1: number) => (
          <label key={index1}>
            {`{ ${keyName} } `}
            <select>
              <option value="default"></option>(
              {apiDatas[keyName as keyof typeof apiDatas].map(
                (data: IFieldDatas, index2: number) => (
                  <option value={data.name} key={index2}>
                    {data.name}
                  </option>
                )
              )}
              )
            </select>
          </label>
        ))}
      </div>
    </>
  );
}

//<pre>{JSON.stringify(fullApiData, null, ' ')}</pre>
