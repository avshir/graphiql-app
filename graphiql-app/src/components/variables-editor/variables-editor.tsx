import './variables-editor.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { ChangeEvent, useEffect, useState } from 'react';
import { setVariables } from '../../features/slices/variablesSlice';
import { IQueryRequest } from '../documentation-explorer/explorer-types';

interface IVariables {
  [key: string]: string;
}

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

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

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
  };

  return (
    <>
      <h4>Variables</h4>
      <div className="variables-editor-container">
        <textarea className="variables-editor" value={content} onInput={handleChange} />
      </div>
    </>
  );
}
