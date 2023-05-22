import './main-page.scss';
import { fetchData } from '../../features/apiSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import RequestEditor from '../../components/request-editor';
import DocumentationExplorer from '../../components/documentation-explorer';
import ResponseSection from '../../components/response-section';
import VariablesEditor from '../../components/variables-editor/variables-editor';
import { useEffect, useState } from 'react';
import { Resizable } from 're-resizable';

interface IVariables {
  [key: string]: string;
}

export default function MainPage() {
  const dispatch = useAppDispatch();
  const query: string = useAppSelector((state) => state.request.value);
  const variables: IVariables = useAppSelector((state) => state.variables.value);

  const [requestQuery, setRequestQuery] = useState('');

  useEffect(() => {
    const splitQuery = query.split('\n');
    const cloneSplitQuery = splitQuery.slice();

    for (const key in variables) {
      cloneSplitQuery.forEach((elemQuery, index) => {
        const newElemQuery =
          elemQuery.includes(`${key}(code:`) || elemQuery.includes(`${key} (code:`)
            ? `  ${key}(code: "${variables[key]}") {`
            : elemQuery;
        cloneSplitQuery[index] = newElemQuery;
      });
    }

    const resultQuery = cloneSplitQuery.join('\n');

    setRequestQuery(resultQuery);
  }, [query, variables]);

  const handleClick = async (): Promise<void> => {
    dispatch(fetchData(requestQuery));
  };

  return (
    <>
      <main className="main-graphql-container main-page container">
        <button className="request-btn btn btn-secondary" onClick={handleClick}>
          Request
        </button>
        <div className="graphql-container">
          <Resizable
            className="doc-query"
            defaultSize={{ width: '65%', height: 600 }}
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <Resizable
              className="documentation-explorer-container glass-effect"
              defaultSize={{ width: '55%', height: 600 }}
              enable={{
                top: false,
                right: true,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
            >
              <DocumentationExplorer />
            </Resizable>
            <Resizable
              className="request-editor-container"
              defaultSize={{ width: '100%', height: 600 }}
              enable={{
                top: false,
                right: false,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
            >
              <RequestEditor />
              <VariablesEditor />
            </Resizable>
          </Resizable>
          <Resizable
            className="response-section glass-effect"
            defaultSize={{ width: '100%', height: 600 }}
            enable={{
              top: false,
              right: false,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <ResponseSection />
          </Resizable>
        </div>
      </main>
    </>
  );
}
