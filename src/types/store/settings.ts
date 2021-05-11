export type TAction = {
  type: string;
  payload?: any
}

type TInteger = {
  oneDigit: boolean;
  twoDigits: boolean;
  threeDigits?: boolean;
}

export type TSettingsState = {
  leftInt: TInteger;
  rightInt: TInteger;
  operation: string;
  speed: number;
}