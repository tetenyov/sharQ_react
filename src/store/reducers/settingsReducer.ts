import { Operations } from '../../constants/constants'

import {TSettingsState, TAction} from '../types/settings'

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
  operation: Operations.ADD,
};

export const settingsReducer = (state = initialState, {type, payload}:TAction) => {
  return state
};
