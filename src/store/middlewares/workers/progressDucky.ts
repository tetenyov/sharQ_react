import { delay, put } from '@redux-saga/core/effects';

import { store } from '../../index';

import { 
  MOVE_DUCKY,
  DISPATCH_TOGGLE_START,
  DISPATCH_TOGGLE_RESUME,
} from '../../../constants/actions';

import { 
  Score, 
  Positions, 
  Delays, 
} from '../../../constants/constants';

export function* progressDucky() {
  const { 
    position: currentPosition, 
    score: currentScore 
  } = store.getState().progress;

  const { isStart } = store.getState().gameStates;

  if (isStart) {
    yield put({
      type: MOVE_DUCKY,
      payload: { 
        position: currentPosition + Positions.DUCKY_MOVE, 
        score: currentScore + 1 
      }
    });
  }

  if (currentScore === Score.TRIGGER_WIN) {
    yield put({ 
      type: DISPATCH_TOGGLE_RESUME, 
      payload: true, 
    });

    yield delay(Delays.START);

    yield put({ 
      type: MOVE_DUCKY, 
      payload: { position: Positions.START, score: Score.WIN } 
    });

    yield put({ 
      type: DISPATCH_TOGGLE_START, 
      payload: false, 
    })
  }
};