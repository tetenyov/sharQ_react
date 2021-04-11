import { delay, put } from '@redux-saga/core/effects';
import { 
  MOVE_DUCKY,
  DISPATCH_TOGGLE_START,
  DISPATCH_TOGGLE_RESUME,
} from '../../../constants/actions';

import { store } from '../../index';

export function* progressDucky() {
  const { position: currentPosition, score: currentScore } = store.getState().progress;
  const { isStart } = store.getState().gameStates;

  if (isStart) {
    yield put({
      type: MOVE_DUCKY,
      payload: { position: currentPosition + 13, score: currentScore + 1 }
    });
  }

  if (currentScore === 4) {
    yield put({ type: DISPATCH_TOGGLE_RESUME, payload: true, });

    yield delay(1500);
    yield put({ type: MOVE_DUCKY, payload: {position: 20, score: 5} });
    yield put({ type: DISPATCH_TOGGLE_START, payload: false, })
  }
};