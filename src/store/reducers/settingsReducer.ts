import { Operations } from '../../constants/constants'

type TAction = {
  type: string;
  payload?: any
}

type TInt = {
  oneDigit: boolean;
  twoDigits: boolean;
  threeDigits?: boolean;
}

export type TSettingsState = {
  leftInt: TInt;
  rightInt: TInt;
  operation: string
}

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
