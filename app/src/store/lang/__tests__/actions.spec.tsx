import createMockStore from 'redux-mock-store';
import { languages } from '../../../components/common/Constants';
import switchLanguage from '../actions';
import { ApplicationState } from '../..';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type DispatchExts = ThunkDispatch<ApplicationState, void, AnyAction>;

const middleware = [thunk];
const mockStore = createMockStore<Partial<ApplicationState>, DispatchExts>(middleware);

let store = mockStore();

describe('lang reducer test', () => {
  beforeEach(() => {
    // Initialize mockstore with empty state
    const initialState = {}
    store = mockStore(initialState)
  });

  it('should dispatch @@language/SWITCH_LANGUAGE action', () => {
    store.dispatch(switchLanguage(languages.FRENCH));
    const actions = store.getActions();

    const expectedState = {
      error: undefined,
      meta: undefined,
      payload: 'fr',
      type: '@@language/SWITCH_LANGUAGE'
    };

    expect(actions).toEqual([expectedState]);
  });
});

