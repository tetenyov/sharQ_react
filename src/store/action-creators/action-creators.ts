import { 
  CHANGE_SETTINGS_OPERAND, 
  CHANGE_SETTINGS_OPERATION, 
  CHANGE_SETTINGS_SPEED,
  GENERATE_PROBLEM,
  SEND_ANSWER,
  SEND_CORRECT_ANSWER,
  CHANGE_DUCK_POSITION, 
  START_ROUND,
  FINISH_ROUND,
  TOGGLE_ANIMATION,
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

export function changeSettingsOperation(payload: string) {
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

export function sendAnswer(payload: string) {
  return {
    type: SEND_ANSWER,
    payload,
  };
};

export function sendCorrectAnswer() {
  return {
    type: SEND_CORRECT_ANSWER,
  };
};

export function moveDucky() {
  return {
    type: CHANGE_DUCK_POSITION,
  };
};

export function startRound() {
  return {
    type: START_ROUND,
  };
};

export function finishRound() {
  return {
    type: FINISH_ROUND,
  };
};

export function toggleAnimation(isAnimation: boolean) {
  return {
    type: TOGGLE_ANIMATION,
    payload: isAnimation,
  };
};
