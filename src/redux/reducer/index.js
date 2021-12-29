import Counter from './counter';
import { combineReducers } from 'redux';
const allreducers = combineReducers({
    Count: Counter
})
export default allreducers;