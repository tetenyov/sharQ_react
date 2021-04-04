import { 
  CHANGE_SETTINGS_OPERAND, 
  CHANGE_SETTINGS_OPERATION, 
  CHANGE_SETTINGS_SPEED,
  GENERATE_PROBLEM,
  SEND_ANSWER, 
} from '../../constants/actions';

type TChangeSettingsPayload = {
  operand: string;
  value?: string;
};

export function changeSettingsOperand(payload: TChangeSettingsPayload) {
  return {
    type: CHANGE_SETTINGS_OPERAND,
    payload,
  };
};

export function changeSettingsOperation(payload: TChangeSettingsPayload) {
  return {
    type: CHANGE_SETTINGS_OPERATION,
    payload,
  };
};

export function changeSettingsSpeed(payload: number) {
  return {
    type: CHANGE_SETTINGS_SPEED,
    payload,
  };
};

export function generateProblem() {
  return {
    type: GENERATE_PROBLEM,
  };
};

export function sendAnswer(answer: string) {
  return {
    type: SEND_ANSWER,
    payload: answer,
  };
};