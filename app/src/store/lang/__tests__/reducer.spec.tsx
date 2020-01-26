import { languages } from "../../../components/common/Constants";
import SWITCH_LANGUAGE from "../types";
import { langReducer, initialState } from "../reducer";

describe('language reducers test', () => { 
  const expectedLang = languages.FRENCH;

  it('should handle @@language/SWITCH_LANGUAGE action', () => {
    const action = {
      type: SWITCH_LANGUAGE,
      payload: expectedLang
    };

    expect(langReducer(initialState, action)).toEqual(expectedLang);
  });

  it('should handle NOT @@language/SWITCH_LANGUAGE action', () => {
    const action = {
      type: "@@language/OTHER",
      payload: expectedLang
    };

    expect(langReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle @@language/SWITCH_LANGUAGE action without Initial State', () => {
    const action = {
      type: SWITCH_LANGUAGE,
      payload: expectedLang
    };

    expect(langReducer(undefined, action)).toEqual(expectedLang);
  });

  it('should handle NOT @@language/SWITCH_LANGUAGE action without Initial State', () => {
    const action = {
      type: "@@language/OTHER",
      payload: expectedLang
    };

    expect(langReducer(undefined, action)).toEqual(initialState);
  });
});