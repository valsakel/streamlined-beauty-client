import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadAuthToken} from './actions/localStorage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    // const token = authToken;
    store.dispatch(setAuthToken(authToken));
    store.dispatch(refreshAuthToken());
}

export default store;
