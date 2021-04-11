import { delay, put } from '@redux-saga/core/effects';
import { MOVE_DUCKY } from '../../../constants/actions';

import { store } from '../../index';

export function* progressDucky() {
  const { position: currentPosition, score: currentScore } = store.getState().progress;

  yield put({
    type: MOVE_DUCKY,
    payload: { position: currentPosition + 13, score: currentScore + 1 }
  });

  if (currentScore === 5) {
    yield delay(2000)
  }
};