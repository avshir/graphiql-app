import './variables-editor.scss';
import { useAppDispatch } from '../../utils/hooks';
import { ChangeEvent, useEffect, useState } from 'react';
import { setVariables } from '../../features/slices/variablesSlice';

interface IVariables {
  [key: string]: string;
}

export default function VariablesEditor() {
  const dispatch = useAppDispatch();

  const [currentVariables, setCurrentVariables] = useState({} as IVariables);

  useEffect(() => {
    dispatch(setVariables(currentVariables));
  }, [currentVariables]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const regexp = /(\w+)/gu;
    const variablesArray = value.match(regexp) as RegExpMatchArray;
    const variablesObj: IVariables = {};
    
    if (!!variablesArray) {
      variablesArray.forEach((variable: string, index: number) => {
        if (index % 2 === 0) {
          variablesObj[variable] = variablesArray[index + 1];
        }
      });
    }
    
    setCurrentVariables(variablesObj);
  };

  return (
    <>
      <h4>Variables</h4>
      <div className="variables-editor-container">
        <textarea className="variables-editor" onInput={handleChange} />
      </div>
    </>
  );
}
