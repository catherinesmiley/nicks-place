export const menutypesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MENUTYPES':
            return action.menutypes
        default: 
            return state
        }
    }