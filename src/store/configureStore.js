import { createStore, combineReducers } from 'redux'
import photosReducer from '../reducers/photos'
import filtersReducer from '../reducers/filters';

const store = createStore(combineReducers({
  photos: photosReducer,
  filters: filtersReducer
}))

export default store
