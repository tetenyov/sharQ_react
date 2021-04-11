import { delay, put } from 'redux-saga/effects';

import { DISPATCH_CORRECT_ANSWER } from '../../../constants/actions'

export function* sendCorrectAnswer () {
  yield delay(400)
  yield put({ type: DISPATCH_CORRECT_ANSWER})
}