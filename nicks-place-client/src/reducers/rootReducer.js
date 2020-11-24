import { combineReducers } from 'redux'
import { mealsReducer } from './mealsReducer'

export const rootReducer = combineReducers({
    meals: mealsReducer
})