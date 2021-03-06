import { DISPATCH_PROBLEM, SEND_ANSWER, DISPATCH_CORRECT_ANSWER } from '../../constants/actions';

import { TAction, TProblemState } from '../../types/store/problem';

const initialState: TProblemState = {
  leftInt: 0,
  rightInt: 0,
  answer: '',
};

export const problemReducer = (state = initialState, {type, payload}: TAction) => {

  const getAnswer = (prevAnswer: string, payload: string) => {
    return payload === 'delete'
      ? prevAnswer.slice(0, prevAnswer.length - 1)
      : prevAnswer += payload;
  };

  switch (type) {
    case DISPATCH_PROBLEM:
      return {
        ...state,
        leftInt: payload.leftInt,
        rightInt: payload.rightInt,
      };

    case SEND_ANSWER:
      return {
        ...state,
        answer: getAnswer(state.answer, payload),
      };

    case DISPATCH_CORRECT_ANSWER:
      return {
        ...state,
        answer: '',
      };
     
    default: return state;
  }
}