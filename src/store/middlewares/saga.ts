import { takeEvery } from 'redux-saga/effects';

import { 
  GENERATE_PROBLEM, 
  SEND_CORRECT_ANSWER, 
  CHANGE_DUCK_POSITION,
  TOGGLE_START,
  TOGGLE_RESUME,
} from '../../constants/actions';

import { generateProblem } from './workers/generateProblem';
import { sendCorrectAnswer } from './workers/sendCorrectAnswer';
import { progressDucky } from './workers/progressDucky';
import { handleGameStates } from './workers/handleGameStates';


export default function* sagaWatcher() {
  yield takeEvery(GENERATE_PROBLEM, generateProblem);
  yield takeEvery(CHANGE_DUCK_POSITION, progressDucky);
  yield takeEvery(SEND_CORRECT_ANSWER, sendCorrectAnswer);
  yield takeEvery(TOGGLE_START, handleGameStates);
  yield takeEvery(TOGGLE_RESUME, handleGameStates);
};
