import { DISPATCH_TOGGLE_START, DISPATCH_TOGGLE_RESUME } from '../../constants/actions';

import { TInitialState, TAction } from '../types/gameStates';

const initialState: TInitialState = {
  isStart: false,
  isResume: false,
};

export const gameStatesReducer = (state = initialState, {type, payload}: TAction) => {
  switch (type) {
    case DISPATCH_TOGGLE_START:
      return {
        ...state,
        isStart: payload,
      };
      
    case DISPATCH_TOGGLE_RESUME:
      return {
        ...state,
        isResume: payload,
      };

    default: return state;
   }
}