import { delay, put } from '@redux-saga/core/effects';
import {  DISPATCH_FINISH_ROUND } from '../../../constants/actions';

// import { store } from '../../index';

export function* finishRound() {
  // const currentPosition = store.getState().progress.position;
  // const currentScore = store.getState().progress.score;
  yield delay(2000);

  yield put({ type: DISPATCH_FINISH_ROUND});

};