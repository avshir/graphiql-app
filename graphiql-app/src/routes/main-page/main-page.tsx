import './main-page.scss';
import { useEffect, useState } from 'react';
import { fetchData } from '../../features/apiSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import RequestEditor from '../../components/request-editor';
import DocumentationExplorer from '../../components/documentation-explorer';
import ResponseSection from '../../components/response-section';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const requestQuery = useAppSelector((state) => state.request.value);
  
  const handleClick = async (): Promise<void> => {
    console.log(requestQuery)

    dispatch(fetchData(requestQuery));
  };

  return (
    <>
      <main className="main">
        <h1>MainPage</h1>
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
        <button onClick={handleClick}>Request</button>
      </main>
    </>
  );
}
