import { TInitialState, TAction } from '../types/progress';
import {  MOVE_DUCKY, START_ROUND, DISPATCH_FINISH_ROUND } from '../../constants/actions';

const initialState: TInitialState = {
  position: 20,
  score: 0,
  isStart: false,
};

export const progressReducer = (state = initialState, { type, payload }: TAction) => {
  switch (type) {
    case MOVE_DUCKY: 
      return {
        ...state, 
        position: payload.position,
        score: payload.score,
      };

    case START_ROUND: 
      return {
        ...state, 
        isStart: true,
      };

    case DISPATCH_FINISH_ROUND: 
      return {
        ...state, 
        isStart: false,
        position: 20,
      };

    default: return state;
  }
};