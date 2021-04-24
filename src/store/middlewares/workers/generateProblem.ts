import { put } from 'redux-saga/effects';

import { store } from '../../index';
import { DISPATCH_PROBLEM } from '../../../constants/actions';
import { getRandomInteger } from '../../../utils/utils';
import { Operations, digitsToLimits } from '../../../constants/constants';

const generateDivisionOperands = (left: string, right: string, cb: Function) => {
  const divisor = cb(digitsToLimits[right].min, digitsToLimits[right].max);

  let dividend;
  let limitMin;
  let limitMax;

  switch (left) {
    case 'threeDigits':
      limitMax = Math.floor(digitsToLimits.threeDigits.max / divisor);
      limitMin = Math.ceil(digitsToLimits.threeDigits.min / divisor);

      dividend = divisor * cb(limitMin, limitMax);
      break;
      
    case 'twoDigits':
      limitMax = Math.floor(digitsToLimits.twoDigits.max / divisor);
      limitMin = Math.ceil(digitsToLimits.twoDigits.min / divisor);
    
      dividend = divisor * cb(limitMin, limitMax);
      break;
    
    case 'oneDigit':
      limitMax = Math.floor(digitsToLimits.oneDigit.max / divisor);
      limitMin = Math.ceil(digitsToLimits.oneDigit.min / divisor);
    
      dividend = divisor * cb(limitMin, limitMax);
  }

  return {
    leftInt: dividend,
    rightInt: divisor,
  };
};

export function* generateProblem() {
  const state = store.getState();
  const operation = state.settings.operation;

  const leftInt = Object.entries(state.settings.leftInt)
    .find(([_, value]) => value) || '';

  const rightInt = Object.entries(state.settings.rightInt)
    .find(([_, value]) => value) || '';

  const leftOperand = leftInt && leftInt[0];
  const rightOperand = rightInt && rightInt[0];

  const payload = operation === Operations.DIV
    ? generateDivisionOperands(leftOperand, rightOperand, getRandomInteger)
    : {
      leftInt: getRandomInteger(digitsToLimits[leftOperand].min, digitsToLimits[leftOperand].max),
      rightInt: getRandomInteger(digitsToLimits[rightOperand].min, digitsToLimits[rightOperand].max)
    };

  yield put({ type: DISPATCH_PROBLEM, payload })
};
