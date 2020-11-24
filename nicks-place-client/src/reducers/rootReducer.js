import { combineReducers } from 'redux'
import { menuItemsReducer } from './menuItemsReducer'

export const rootReducer = combineReducers({
    menuItems: menuItemsReducer
})