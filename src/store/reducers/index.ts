import { combineReducers } from 'redux';

import { settingsReducer } from './settingsReducer';

export const rootReducer = combineReducers({
  settingsReducer,
})