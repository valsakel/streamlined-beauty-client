import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {loadAuthToken} from './actions/localStorage';
import {setAuthToken, refreshAuthToken} from './actions/auth';



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
