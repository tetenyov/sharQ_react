import React, { useEffect, MouseEvent } from 'react';

import { useDispatch } from 'react-redux';

import { sendAnswer } from '../../store/action-creators/action-creators'
import Control from './Control';
import { KeyCodes } from '../../constants/key-codes';
import { isNumberKey } from '../../utils/utils';

const NUMBER_CONTROLS = 10;

function ControlsList() {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleNumberKeydown = ({ code }: {code: string}) => {
      if (isNumberKey(KeyCodes.NUMBER_CODES, code)) {
        const answer = code.match(/\d/)?.join('') || ''

        dispatch(sendAnswer(answer))
      }
    }

    window.addEventListener('keydown', handleNumberKeydown)
    return () => window.removeEventListener('keydown', handleNumberKeydown)
  }, [])

  const digitControls = Array.from({length: NUMBER_CONTROLS}, (control, i) => {
    const controlValue = (NUMBER_CONTROLS - 1) - i;

    return (
      <li className="controls-list__item" key={i}>
        <Control type="button" value={controlValue}>{ controlValue }</Control>
      </li>
    );
  });

  const handleControlClick = (event: MouseEvent) => {
    dispatch(sendAnswer((event.target as HTMLButtonElement).value))
  }

  return (
    <ul className="controls-list" onClick={handleControlClick}>
      { digitControls }
      <li className="controls-list__item controls-list__item--minus" key={'11'}>
        <Control type="button" value="-">&#8722;</Control>
      </li>
      <li className="controls-list__item controls-list__item--delete" key={'12'}>
        <Control type="button" value='delete'>&#8592;</Control>
      </li>
    </ul>
  );
};

export default ControlsList;
