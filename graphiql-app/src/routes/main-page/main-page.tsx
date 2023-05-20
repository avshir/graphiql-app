import './main-page.scss';
import { fetchData } from '../../features/apiSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import RequestEditor from '../../components/request-editor';
import DocumentationExplorer from '../../components/documentation-explorer';
import ResponseSection from '../../components/response-section';
import VariablesEditor from '../../components/variables-editor/variables-editor';
import { useEffect, useState } from 'react';

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

    console.log(resultQuery);
    setRequestQuery(resultQuery);
  }, [query, variables]);

  const handleClick = async (): Promise<void> => {
    dispatch(fetchData(requestQuery));
  };

  return (
    <>
      <main className="main">
        <h1>MainPage</h1>
        <button onClick={handleClick}>Request</button>
        <div className="graphql-container">
          <section className="documentation-explorer-container">
            <DocumentationExplorer />
          </section>
          <section className="request-editor-container">
            <RequestEditor />
            <VariablesEditor />
          </section>
          <section className="response-section">
            <ResponseSection />
          </section>
        </div>
      </main>
    </>
  );
}
