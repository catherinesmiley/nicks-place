export const fetchMenutypes = () => {
    return dispatch => {
        fetch('http://localhost:3090/menutypes')
        .then(resp => resp.json())
        .then(menutypes => console.log(menutypes))
        // dispatch({ type: 'FETCH_MENUTYPES', menutypes })
    }
}