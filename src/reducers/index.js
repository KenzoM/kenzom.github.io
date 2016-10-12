import { combineReducers } from 'redux';

import info from './reducers_projects_info'

const rootReducer = combineReducers({
  info : info
});

export default rootReducer;
