import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const DEFAULT_INITIAL_STATE = {
  counter: 0,
};

const getOrCreateStore = (initialState = DEFAULT_INITIAL_STATE) => {
  const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
  return createStore(reducer, initialState, enhancer);
};

export default getOrCreateStore;
