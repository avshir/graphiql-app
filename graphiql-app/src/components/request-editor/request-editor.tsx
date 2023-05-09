import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/ext-language_tools';

export default function RequestEditor() {
  const onChange = (value: string) => {
    console.log(value);
  };

  return (
    <AceEditor
      placeholder="Write API request here!"
      mode="json"
      theme="solarized_dark"
      name="request_editor"
      onChange={onChange}
      fontSize="14"
      height={'100%'}
      width={'100%'}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        useWorker: false,
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
