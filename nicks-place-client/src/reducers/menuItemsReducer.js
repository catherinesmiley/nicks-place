export const menuItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MENU_ITEMS':
            return action.menuItems
        default: 
            return state
        }
    }