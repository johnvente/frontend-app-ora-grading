import { combineReducers } from 'redux';

import app from './app';
import grading from './grading';
import submissions from './submissions';

/* istanbul ignore next */
const rootReducer = combineReducers({
  app,
  grading,
  submissions,
});

export default rootReducer;
