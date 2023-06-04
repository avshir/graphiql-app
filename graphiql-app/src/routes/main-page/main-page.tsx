import './main-page.scss';
import RequestEditor from '../../components/request-editor';
import ResponseSection from '../../components/response-section';
import VariablesEditor from '../../components/variables-editor';
import { Resizable } from 're-resizable';
import { Suspense, useEffect, useState } from 'react';
import Spinner from '../../components/spinner';
import HeadersEditor from '../../components/headers-editor';
import Modal from '../../components/modal';
import { useAppSelector } from '../../utils/hooks';
import DocumentationExplorer from '../../components/documentation-explorer';

export default function MainPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { errorData, errorDataCheck } = useAppSelector((state) => state.data);
  const { errorSchema, errorSchemaCheck } = useAppSelector((state) => state.schema);

  useEffect(() => {
    if (errorData && errorDataCheck) {
      setModalOpen(true);
    }
    if (errorSchema && errorSchemaCheck) {
      setModalOpen(true);
    }
  }, [errorData, errorDataCheck, errorSchema, errorSchemaCheck]);

  return (
    <>
      <div className="main-graphql-container container">
        {isModalOpen && <Modal setModalOpen={setModalOpen} />}
        <div className="graphql-container">
          <Resizable
            className="documentation-explorer-container card border-dark mb-3"
            defaultSize={{ width: '30%', height: 600 }}
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: true,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <Suspense fallback={<Spinner />}>
              <DocumentationExplorer />
            </Suspense>
          </Resizable>

          <Resizable
            className="request-editor-container"
            defaultSize={{ width: '30%', height: 600 }}
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
            <RequestEditor />
            <VariablesEditor />
            <HeadersEditor />
          </Resizable>

          <Resizable
            className="response-section card border-dark mb-3"
            defaultSize={{ width: '30%', height: 600 }}
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
            <ResponseSection />
          </Resizable>
        </div>
      </div>
    </>
  );
}
