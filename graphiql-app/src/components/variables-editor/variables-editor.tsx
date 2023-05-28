import './variables-editor.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useCallback, useEffect, useState } from 'react';
import { setVariables } from '../../features/slices/variablesSlice';
import { IQueryRequest } from '../documentation-explorer/explorer-types';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { aura } from '@uiw/codemirror-theme-aura';
import { setOpenStateVariables } from '../../features/slices/stateVariablesSectionSlice';

interface IVariables {
  [key: string]: string;
}

export default function VariablesEditor() {
  const dispatch = useAppDispatch();
  const args = useAppSelector((state) => state.arguments.value) as IQueryRequest;
  const [content, setContent] = useState('');
  const [currentVariables, setCurrentVariables] = useState({} as IVariables);
  const [isOpen, setOpen] = useState(false);

  const stateVariablesSection: boolean = useAppSelector(
    (state) => state.isOpenVariablesSection.value
  );

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

  const handleClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(setOpenStateVariables(isOpen));
  }, [dispatch, isOpen]);

  useEffect(() => {
    setOpen(stateVariablesSection);
  }, [stateVariablesSection]);

  return (
    <>
      <div
        className="variables-editor-container card border-dark mb-3"
        style={
          stateVariablesSection
            ? { height: '30%', transition: 'height 0.3s' }
            : { height: '6%', transition: 'height 0.3s' }
        }
      >
        <button className="variables-btn btn btn-primary" onClick={handleClick}>
          Variables
        </button>
        <CodeMirror
          className="variables-editor"
          style={
            stateVariablesSection
              ? { opacity: '1', transition: 'opacity 1.5s' }
              : { opacity: '0', transition: 'opacity 0.05s' }
          }
          value={content}
          theme={aura}
          extensions={[json()]}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
