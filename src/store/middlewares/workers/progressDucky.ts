import { delay, put } from '@redux-saga/core/effects';
import { 
  MOVE_DUCKY, 
  DISPATCH_FINISH_ROUND,
  DISPATCH_TOGGLE_ANIMATION, 
} from '../../../constants/actions';

import { store } from '../../index';

export function* progressDucky() {
  const { position: currentPosition, score: currentScore, isStart } = store.getState().progress;

  if (isStart) {
    yield put({
      type: MOVE_DUCKY,
      payload: { position: currentPosition + 13, score: currentScore + 1 }
    });
  }

  if (currentScore === 4) {
    yield put({ type: DISPATCH_TOGGLE_ANIMATION, payload: false })

    yield delay(1500);
    yield put({ type: DISPATCH_FINISH_ROUND })
  }
};