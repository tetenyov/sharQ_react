import { 
  CHANGE_SETTINGS_OPERAND, 
  CHANGE_SETTINGS_OPERATION, 
  CHANGE_SETTINGS_SPEED 
} from '../../constants/actions';

import { TSettingsState, TAction } from '../types/settings';

const initialState: TSettingsState = {
  leftInt: {
    oneDigit: true,
    twoDigits: false,
    threeDigits: false,
  },
  rightInt: {
    oneDigit: true,
    twoDigits: false,
  },
  operation: {
    add: true,
    sub: false,
    mult: false,
    div: false,
  },
  speed: 1,
};

export const settingsReducer = (state = initialState, { type, payload }: TAction) => {
  switch (type) {
    case CHANGE_SETTINGS_OPERAND:
      return {
        ...state,
        [payload.operand]: {
          oneDigit: payload.value === 'oneDigit',
          twoDigits: payload.value === 'twoDigits',
          threeDigits: payload.value === 'threeDigits',
        }
      };

    case CHANGE_SETTINGS_OPERATION:
      return {
        ...state,
        operation: {
          add: payload === 'add',
          sub: payload === 'sub',
          mult: payload === 'mult',
          div: payload === 'div',
        }
      };

    case CHANGE_SETTINGS_SPEED:
      return {
        ...state,
        speed: payload,
      };

    default:
      return state;
  }
};
