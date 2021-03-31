import { 
  CHANGE_SETTINGS_OPERAND, 
  CHANGE_SETTINGS_OPERATION, 
  CHANGE_SETTINGS_SPEED 
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