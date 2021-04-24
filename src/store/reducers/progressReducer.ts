import { TInitialState, TAction } from '../types/progress';

import {  MOVE_DUCKY } from '../../constants/actions';

import { Positions } from '../../constants/constants';

const initialState: TInitialState = {
  position: Positions.START,
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
