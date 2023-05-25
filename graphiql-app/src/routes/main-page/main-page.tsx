import './main-page.scss';
import RequestEditor from '../../components/request-editor';
import DocumentationExplorer from '../../components/documentation-explorer';
import ResponseSection from '../../components/response-section';
import VariablesEditor from '../../components/variables-editor/variables-editor';
import { Resizable } from 're-resizable';

export default function MainPage() {
  return (
    <>
      <div className="main-graphql-container container">
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
            <DocumentationExplorer />
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
