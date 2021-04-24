import { delay, put } from '@redux-saga/core/effects';

import { TAction } from '../../types/gameStates';

import { 
  MOVE_DUCKY,
  TOGGLE_RESUME,
  DISPATCH_TOGGLE_RESUME,
  TOGGLE_START,
  DISPATCH_TOGGLE_START,
} from '../../../constants/actions';

import { 
  Score, 
  Positions, 
  Delays,
} from '../../../constants/constants';

export function* handleGameStates(props: TAction) {
  if (!props.payload && props.type === TOGGLE_START) {
    yield delay(Delays.START);
  } 

  yield put({ 
    type: DISPATCH_TOGGLE_START, 
    payload: props.payload, 
  })
  
  if (props.type === TOGGLE_RESUME) {
    yield put({ 
      type: MOVE_DUCKY, 
      payload: {position: Positions.START, score: Score.START} 
    });

    yield put({ type: DISPATCH_TOGGLE_RESUME, payload: props.payload, })
  }
};