import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Main from './main';
import configureStore from './store/configureStore';
// import * as serviceWorker from 'src/serviceWorker';

const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(initialState);

ReactDOM.render(<Main store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://create-react-app.dev/docs/making-a-progressive-web-app/
// serviceWorker.unregister();
