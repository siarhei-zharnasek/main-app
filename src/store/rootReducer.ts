import { combineReducers } from '@reduxjs/toolkit';
import { counter } from 'features/Counter/store';
import { current_user } from 'features/CurrentUser/store';

export const rootReducer = combineReducers({
  counter,
  current_user,
});
