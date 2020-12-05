import { combineReducers } from 'redux'
import { mealsReducer } from './mealsReducer'
import { menusReducer } from './menusReducer'
import { menutypesReducer } from './menutypesReducer'

export const rootReducer = combineReducers({
    meals: mealsReducer,
    menus: menusReducer,
    menutypes: menutypesReducer
})