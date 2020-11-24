export const menusReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MENUS':
            return action.menus
        default: 
            return state
        }
    }