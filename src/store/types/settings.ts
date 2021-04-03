export type TAction = {
  type: string;
  payload?: any
}

type TInteger = {
  oneDigit: boolean;
  twoDigits: boolean;
  threeDigits?: boolean;
}

type TKey = {
  [key: string]: boolean;
}

export type TOperation = TKey & {
  add: boolean,
  sub: boolean,
  mult: boolean,
  div: boolean,
}

export type TSettingsState = {
  leftInt: TInteger;
  rightInt: TInteger;
  operation: TOperation;
  speed: number;
}