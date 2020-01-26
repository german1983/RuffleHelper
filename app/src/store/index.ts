import { combineReducers } from 'redux';

import { languages } from '../components/common/Constants';
import { langReducer } from './lang/reducer';

export interface ApplicationState {
  readonly lang: languages;
}

const rootReducer = combineReducers({
  lang: langReducer,
});

export default rootReducer;
