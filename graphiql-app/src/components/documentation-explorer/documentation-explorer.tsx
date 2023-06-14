import './documentation-explorer.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { fetchSchema } from '../../features/schemaSlice';
import { IField, IFieldDatas, IQueryRequest, ISchema, MainQuery } from './explorer-types';
import { saveQuery } from '../../features/querySlice';
import { saveArguments } from '../../features/slices/argumentsSlice';
import Tree from '../tree';
import Spinner from '../spinner';
import { setOpenStateVariables } from '../../features/slices/stateVariablesSectionSlice';

export default function DocumentationExplorer() {
  const dispatch = useAppDispatch();
  const dataSchema = useAppSelector((state) => state.schema.list) as ISchema;
  const variables = useAppSelector((state) => state.variables.value) as IQueryRequest;
  const { loading } = useAppSelector((state) => state.schema);

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
    dispatch(setOpenStateVariables(true));
    setStateClick(true);

    const nameArguments: string = event.target.value;
    const nameCategory = event.target.dataset.queryname as string;
    const fullName: string =
      nameCategory + nameArguments.charAt(0).toUpperCase() + nameArguments.slice(1);
    const copyArgs = JSON.parse(JSON.stringify(args));

    if (nameCategory in copyArgs) {
      const cloneFields = copyArgs[nameCategory];
      const indexField: number = cloneFields.indexOf(fullName);

      if (indexField >= 0) {
        cloneFields.splice(indexField, 1);

        if (cloneFields.length === 0) {
          delete copyArgs[nameCategory];
          setArgs(copyArgs);
        } else {
          copyArgs[nameCategory] = cloneFields;
          setArgs(copyArgs);
        }
      } else {
        const newFields = [...cloneFields, fullName];
        copyArgs[nameCategory] = newFields;
        setArgs(copyArgs);
      }
    } else {
      copyArgs[nameCategory] = [fullName];
      setArgs(copyArgs);
    }
  };

  useEffect(() => {
    setStateClick(false);
    dispatch(saveArguments(args));
  }, [dispatch, stateClick, args]);

  useEffect(() => {
    setStateClick(false);

    const queries = [];

    for (const category in query) {
      let categoryWithArgument = category;

      if (args[category]) {
        const nameArgument = args[category][0];

        if (nameArgument) {
          categoryWithArgument = `${category}(code: $${nameArgument})`;
        }
      }

      const oneQuery = `
  ${categoryWithArgument} {
    ${query[category].join('\n    ')}
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
      <h5 className="header-section card-title">Documentation</h5>
      {loading ? <Spinner /> : <></>}
      <div className="query-form">
        {Object.keys(apiDatas).map((queryName: string, index1: number) => (
          <div className="query-container" key={index1}>
            <Tree name={`{ ${queryName} }`} style={{ color: '#ffffff' }} className="query-name">
              <div className="category-container">
                {queryName === 'continent' ||
                queryName === 'country' ||
                queryName === 'language' ? (
                  <div className="query-arguments">
                    <span className="param-name">Arguments:</span>
                    <div>
                      <label className="query-item-label">
                        <input
                          className="form-check-input query-item-input"
                          type="checkbox"
                          data-queryname={queryName as keyof typeof apiDatas}
                          onChange={handlerInputArguments}
                          value="code"
                          name="query-name"
                        />
                        code: <span className="type-fields-string">String</span>
                      </label>
                    </div>
                  </div>
                ) : (
                  ''
                )}

                <div className="query-list">
                  <span className="param-name">Fields:</span>
                  {apiDatas[queryName as keyof typeof apiDatas].map(
                    (data: IFieldDatas, index2: number) =>
                      data.name === 'subdivisions' ? (
                        ''
                      ) : data.name === 'states' ? (
                        ''
                      ) : (
                        <div className="query-item" key={index2}>
                          <label className="query-item-label">
                            <input
                              className="form-check-input query-item-input"
                              type="checkbox"
                              data-queryname={queryName as keyof typeof apiDatas}
                              onChange={handlerInput}
                              value={data.name}
                              name="query-name"
                            />
                            {data.name}:{' '}
                            {data.name === 'countries' ? (
                              <span className="type-fields-string">{'{ Country }'}</span>
                            ) : data.name === 'continent' ? (
                              <span className="type-fields-string">{'{ Continent }'}</span>
                            ) : data.name === 'languages' ? (
                              <span className="type-fields-string">{'{ Language }'}</span>
                            ) : data.name === 'rtl' ? (
                              <span className="type-fields-string">Int</span>
                            ) : (
                              <span className="type-fields-string">String</span>
                            )}
                          </label>
                        </div>
                      )
                  )}
                </div>
              </div>
            </Tree>
          </div>
        ))}
      </div>
    </>
  );
}
