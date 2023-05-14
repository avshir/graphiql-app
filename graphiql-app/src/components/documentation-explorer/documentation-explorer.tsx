import './documentation-explorer.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { fetchSchema } from '../../features/schemaSlice';
import { IField, IFieldDatas, IQueryRequest, ISchema, MainQuery } from './explorer-types';
import { saveQuery } from '../../features/querySlice';

export default function DocumentationExplorer() {
  const dispatch = useAppDispatch();
  const dataSchema = useAppSelector((state) => state.schema.list) as ISchema;
  const variables = useAppSelector((state) => state.variables.value) as IQueryRequest;

  const [apiDatas, setApiDatas] = useState({} as MainQuery);
  const [summaryQuery, setSummaryQuery] = useState('');
  const [query, setQuery] = useState({} as IQueryRequest);
  const [args, setArgs] = useState({} as IQueryRequest);
  const [stateClick, setStateClick] = useState(false);

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

      setApiDatas(mainQuery);
    }
  }, [dataSchema]);

  const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
    setStateClick(true);

    const nameField: string = event.target.value;
    const nameCategory = event.target.dataset.queryname as string;

    if (nameCategory in query) {
      const cloneFields = query[nameCategory];
      const indexField: number = cloneFields.indexOf(nameField);

      if (indexField >= 0) {
        cloneFields.splice(indexField, 1);

        if (cloneFields.length === 0) {
          delete query[nameCategory];
          setQuery(query);
        } else {
          query[nameCategory] = cloneFields;
          setQuery(query);
        }
      } else {
        const newFields = [...cloneFields, nameField];
        query[nameCategory] = newFields;
        setQuery(query);
      }
    } else {
      query[nameCategory] = [nameField];
      setQuery(query);
    }
  };

  const handlerInputArguments = (event: ChangeEvent<HTMLInputElement>) => {
    setStateClick(true);

    const nameArguments: string = event.target.value;
    const nameCategory = event.target.dataset.queryname as string;

    if (nameCategory in args) {
      const cloneFields = args[nameCategory];
      const indexField: number = cloneFields.indexOf(nameArguments);

      if (indexField >= 0) {
        cloneFields.splice(indexField, 1);

        if (cloneFields.length === 0) {
          delete args[nameCategory];
          setArgs(args);
        } else {
          args[nameCategory] = cloneFields;
          setArgs(args);
        }
      } else {
        const newFields = [...cloneFields, nameArguments];
        args[nameCategory] = newFields;
        setArgs(args);
      }
    } else {
      args[nameCategory] = [nameArguments];
      setArgs(args);
    }
  };

  useEffect(() => {
    setStateClick(false);

    const queries = [];

    for (const category in query) {
      let categoryWithArgument = category;

      if (args[category]) {
        const nameArgument = args[category][0];

        if (category === 'continent' && nameArgument) {
          categoryWithArgument = `${category}(${nameArgument}: )`;
        }

        if (!!variables[nameArgument]) {
          categoryWithArgument = `${category}(${nameArgument}: "${variables[nameArgument]}")`;
        }
      }

      const oneQuery = `
    ${categoryWithArgument} {
        ${query[category].join('\n        ')}
    }
`;

      queries.push(oneQuery);
    }

    const resultQuery = `query {${queries.join('')}}`;

    setSummaryQuery(resultQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateClick, variables]);

  useEffect(() => {
    dispatch(saveQuery(summaryQuery));
  }, [dispatch, summaryQuery]);

  return (
    <>
      <form className="query-form">
        {Object.keys(apiDatas).map((queryName: string, index1: number) => (
          <div className="query-container" key={index1}>
            <div className="query-name">{`{ ${queryName} } `}</div>
            {queryName === 'continent' ? (
              <div>
                <span>Arguments:</span>
                <div>
                  <label className="query-item-label">
                    <input
                      type="checkbox"
                      data-queryname={queryName as keyof typeof apiDatas}
                      onChange={handlerInputArguments}
                      value="code"
                    />
                    code
                  </label>
                </div>
              </div>
            ) : (
              ''
            )}

            <div className="query-list">
              <span>Fields:</span>
              {apiDatas[queryName as keyof typeof apiDatas].map(
                (data: IFieldDatas, index2: number) => (
                  <div className="query-item" key={index2}>
                    <label className="query-item-label">
                      <input
                        type="checkbox"
                        data-queryname={queryName as keyof typeof apiDatas}
                        onChange={handlerInput}
                        value={data.name}
                      />
                      {data.name}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </form>
    </>
  );
}
