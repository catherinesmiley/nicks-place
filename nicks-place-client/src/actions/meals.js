export const fetchMeals = () => {
    return dispatch => {
        fetch('http://localhost:3090/meals')
        .then(resp => resp.json())
        .then(meals => console.log(meals))
    }
}