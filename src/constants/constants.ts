import { TDigitsToLimits } from '../store/types/saga';

type TOperations = {
  [key: string]: string;
};

export const Operations: TOperations = {
  ADD: '+',
  SUB: '-',
  MULT: '\u2715',
  DIV: '\u00F7',
};

export const Score = {
  WIN: 5,
  START: 0,
};

export const Positions = {
  START: 20,
  DUCKY_MOVE: 13
}

export const DELAY_START = 1500;

export const NUMBER_CONTROLS = 10;

export const Jaws = {
  OPEN_DISTANCE_MIN: 0,
  OPEN_DISTANCE_MAX: 15,
  SHUT_DISTANCE: 25
};

export const digitsToLimits: TDigitsToLimits = {
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
