import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './reducers';

// Cria a store
const store = createStore(contactReducer, composeWithDevTools());

export default store;
