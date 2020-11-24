export const fetchMenus = () => {
    return dispatch => {
        fetch('http://localhost:3090/menus')
        .then(resp => resp.json())
        .then(menus => console.log(menus))
    }
}