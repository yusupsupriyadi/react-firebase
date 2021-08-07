import { createStore } from 'redux'
import reducer from '../reducer';

//FIXME CONFIG: Store
export const store = createStore(reducer);
