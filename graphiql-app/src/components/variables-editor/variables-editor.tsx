import './variables-editor.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useCallback, useEffect, useState } from 'react';
import { setVariables } from '../../features/slices/variablesSlice';
import { IQueryRequest } from '../documentation-explorer/explorer-types';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
// import { createTheme } from '@uiw/codemirror-themes';
// import { tags as t } from '@lezer/highlight';
import { aura } from '@uiw/codemirror-theme-aura';

interface IVariables {
  [key: string]: string;
}

// const myTheme = createTheme({
//   theme: 'light',
//   settings: {
//     background: '#ffffff',
//     foreground: '#75baff',
//     caret: '#5d00ff',
//     selection: '#036dd626',
//     selectionMatch: '#036dd626',
//     lineHighlight: '#8a91991a',
//     gutterBackground: '#fff',
//     gutterForeground: '#8a919966',
//   },
//   styles: [
//     { tag: t.comment, color: '#787b8099' },
//     { tag: t.variableName, color: '#0080ff' },
//     { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
//     { tag: t.number, color: '#5c6166' },
//     { tag: t.bool, color: '#5c6166' },
//     { tag: t.null, color: '#5c6166' },
//     { tag: t.keyword, color: '#5c6166' },
//     { tag: t.operator, color: '#5c6166' },
//     { tag: t.className, color: '#5c6166' },
//     { tag: t.definition(t.typeName), color: '#5c6166' },
//     { tag: t.typeName, color: '#5c6166' },
//     { tag: t.angleBracket, color: '#5c6166' },
//     { tag: t.tagName, color: '#5c6166' },
//     { tag: t.attributeName, color: '#5c6166' },
//   ],
// });

export default function VariablesEditor() {
  const dispatch = useAppDispatch();
  const args = useAppSelector((state) => state.arguments.value) as IQueryRequest;
  const [content, setContent] = useState('');
  const [currentVariables, setCurrentVariables] = useState({} as IVariables);

  useEffect(() => {
    let queryArgs = '';

    for (const category in args) {
      queryArgs += `\n   "${args[category].join('\n      ')}": null,`;
    }

    const resultQueryArgs = `{${queryArgs}
}`;

    setContent(resultQueryArgs);
  }, [args]);

  useEffect(() => {
    dispatch(setVariables(currentVariables));
  }, [dispatch, currentVariables]);

  const handleChange = useCallback((value: string) => {
    const regexp = /(\w+)/gu;
    const variablesArray = value.match(regexp) as RegExpMatchArray;
    const variablesObj: IVariables = {};

    if (!!variablesArray) {
      variablesArray.forEach((variable: string, index: number) => {
        if (index % 2 === 0) {
          const newVariable = variable.replace('Code', '');
          variablesObj[newVariable] = variablesArray[index + 1];
        }
      });
    }

    setContent(value);
    setCurrentVariables(variablesObj);
  }, []);

  return (
    <>
      <div className="variables-editor-container card border-dark mb-3">
        <h5 className="header-section card-title">Variables</h5>
        <CodeMirror
          className="variables-editor"
          value={content}
          theme={aura}
          extensions={[json()]}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
