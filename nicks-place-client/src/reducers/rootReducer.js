import { combineReducers } from 'redux'
import { mealsReducer } from './mealsReducer'
import { menusReducer } from './menusReducer'

export const rootReducer = combineReducers({
    meals: mealsReducer,
    menus: menusReducer
})