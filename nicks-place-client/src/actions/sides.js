export const fetchSides = () => {
    return dispatch => {
        fetch('http://localhost:3090/sides')
        .then(resp => resp.json())
        .then(sides => dispatch({ type: 'FETCH_SIDES', sides }))
    }
}