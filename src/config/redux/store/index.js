import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from '../reducer';

//FIXME REDUX: Store
export const store = createStore(reducer, applyMiddleware(thunk))
