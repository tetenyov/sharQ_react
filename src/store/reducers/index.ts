import { combineReducers } from 'redux';

import { settingsReducer } from './settingsReducer';
import { problemReducer } from './problemReducer';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  problem: problemReducer,
});