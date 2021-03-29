export type TAction = {
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