import { takeEvery } from 'redux-saga/effects';

import { store } from '../index';
import { 
  GENERATE_PROBLEM, 
  SEND_CORRECT_ANSWER, 
  CHANGE_DUCK_POSITION,
  FINISH_ROUND, 
} from '../../constants/actions';

import { generateProblem } from './workers/generateProblem';
import { sendCorrectAnswer } from './workers/sendCorrectAnswer';
import { progressDucky } from './workers/progressDucky';
import { finishRound } from './workers/finishRound';


export default function* sagaWatcher() {
  const { isStart } = store.getState().progress;
  if (isStart) {
    yield takeEvery(GENERATE_PROBLEM, generateProblem);
    yield takeEvery(CHANGE_DUCK_POSITION, progressDucky);
  }

  yield takeEvery(SEND_CORRECT_ANSWER, sendCorrectAnswer);
  yield takeEvery(FINISH_ROUND, finishRound);
};
