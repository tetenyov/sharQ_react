import { combineReducers } from 'redux';

import { settingsReducer } from './settingsReducer';
import { problemReducer } from './problemReducer';
import { progressReducer } from './progressReducer';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  problem: problemReducer,
  progress: progressReducer,
});