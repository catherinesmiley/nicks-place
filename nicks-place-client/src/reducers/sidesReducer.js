export const sidesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SIDES': 
            return action.sides
        default: 
            return state
    }
}