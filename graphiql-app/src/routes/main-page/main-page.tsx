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
      </div>
    </>
  );
}
