import Counter from './counter';
import ProductDetail from './productDetail';
import { combineReducers } from 'redux';
const allreducers = combineReducers({
    Count: Counter,
    Products: ProductDetail
})
export default allreducers;