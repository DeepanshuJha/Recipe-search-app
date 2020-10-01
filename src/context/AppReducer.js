export default (state, action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return {
                ...state,
                recipeData: [...action.payload]
            }
        case 'UPDATE_QUERY':
            return {
                ...state,
                query: action.payload
            }
        default:
            return state;
    }
}