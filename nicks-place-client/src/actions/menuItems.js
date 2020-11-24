export const fetchMenuItems = () => {
    return dispatch => {
        fetch('http://localhost:3090/menuitems')
        .then(resp => resp.json())
        .then(menuItems => console.log(menuItems))
    }
}