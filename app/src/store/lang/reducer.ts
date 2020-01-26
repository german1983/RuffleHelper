import {Reducer} from 'redux';
import { languages } from '../../components/common/Constants';
import SWITCH_LANGUAGE from './types';

// Type-safe initialState
export const initialState: languages = languages.ENGLISH;

const reducer: Reducer<languages> = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export {reducer as langReducer};