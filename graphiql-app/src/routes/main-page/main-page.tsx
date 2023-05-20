import './main-page.scss';
import { fetchData } from '../../features/apiSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import RequestEditor from '../../components/request-editor';
import DocumentationExplorer from '../../components/documentation-explorer';
import ResponseSection from '../../components/response-section';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const requestQuery = useAppSelector((state) => state.request.value);

  const handleClick = async (): Promise<void> => {
    dispatch(fetchData(requestQuery));
  };

  return (
    <div className="main-page container">
      <h1>MainPage</h1>
      <button onClick={handleClick}>Request</button>
      <div className="graphql-container">
        <div className="documentation-explorer-container">
          <DocumentationExplorer />
        </div>
        <div className="request-editor-container">
          <RequestEditor />
        </div>
        <div className="response-section">
          <ResponseSection />
        </div>
      </div>
    </div>
  );
}
