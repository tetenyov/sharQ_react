import { delay, put } from 'redux-saga/effects';

import { DISPATCH_CORRECT_ANSWER } from '../../../constants/actions';

import { Delays } from '../../../constants/constants';

export function* sendCorrectAnswer () {
  yield delay(Delays.ANSWER)
  yield put({ type: DISPATCH_CORRECT_ANSWER})
};