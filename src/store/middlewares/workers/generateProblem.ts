import { put } from 'redux-saga/effects';

import { TDigitsToLimits } from '../../types/saga';

import { store } from '../../index';
import { DISPATCH_PROBLEM } from '../../../constants/actions';
import { getRandomInteger } from '../../../utils/utils';
import { Operations } from '../../../constants/constants';

const digitsToLimits: TDigitsToLimits = {
  oneDigit: {
    min: 1,
    max: 9
  },
  twoDigits: {
    min: 10,
    max: 99
  },
  threeDigits: {
    min: 100,
    max: 990
  },
};

const generateDivisionOperands = (left: string, right: string, cb: Function) => {
  const divisor = cb(digitsToLimits[right].min, digitsToLimits[right].max);
  let dividend;
  let limitMin;
  let limitMax;

  switch (left) {
    case 'threeDigits':
      limitMax = Math.floor(999 / divisor);
      limitMin = Math.ceil(100 / divisor);

      dividend = divisor * cb(limitMin, limitMax);
      break;
      
    case 'twoDigits':
      limitMax = Math.floor(99 / divisor);
      limitMin = Math.ceil(10 / divisor);
    
      dividend = divisor * cb(limitMin, limitMax);
      break;
    
    case 'oneDigit':
      limitMax = Math.floor(9 / divisor);
      limitMin = Math.ceil(1 / divisor);
    
      dividend = divisor * cb(limitMin, limitMax);
  }

  return {
    leftInt: dividend,
    rightInt: divisor,
  };
};

export function* generateProblem() {
  const state = store.getState();
  const operation = state.settings.operation

  const leftInt = Object.entries(state.settings.leftInt)
    .find(([_, value]) => value) || '';

  const rightInt = Object.entries(state.settings.rightInt)
    .find(([_, value]) => value) || '';

  const leftOperand = leftInt[0] || '';
  const rightOperand = rightInt && rightInt[0];

  const payload = operation === Operations.DIV
    ? generateDivisionOperands(leftOperand, rightOperand, getRandomInteger)
    : {
      leftInt: getRandomInteger(digitsToLimits[leftOperand].min, digitsToLimits[leftOperand].max),
      rightInt: getRandomInteger(digitsToLimits[rightOperand].min, digitsToLimits[rightOperand].max)
    };

  yield put({ type: DISPATCH_PROBLEM, payload })
};
