import { combineReducers } from 'redux';
import reducer from './reducer';

//combine the reducers

const rootReducers=combineReducers({
    reducer,
})

export default rootReducers;