import {createStore, combineReducers, applyMiddleware} from 'redux'
import PetsReducer from './reducers/PetsReducer'
import thunk from 'redux-thunk'

const store = createStore(combineReducers({
    petStore: PetsReducer
}), applyMiddleware(thunk));

export default store