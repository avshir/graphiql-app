import './main-page.scss';
import { fetchData } from '../../features/apiSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import RequestEditor from '../../components/request-editor';
import DocumentationExplorer from '../../components/documentation-explorer';
import ResponseSection from '../../components/response-section';
import VariablesEditor from '../../components/variables-editor/variables-editor';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const requestQuery = useAppSelector((state) => state.request.value);

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
