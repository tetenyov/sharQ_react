import { TInitialState, TAction } from '../types/progress';
import {  MOVE_DUCKY } from '../../constants/actions';

const initialState: TInitialState = {
  position: 20,
  score: 0,
};

export const progressReducer = (state = initialState, { type, payload }: TAction) => {
  switch (type) {
    case MOVE_DUCKY: 
      return {
        ...state, 
        position: payload.position,
        score: payload.score,
      };
    default: return state;
  }
};
