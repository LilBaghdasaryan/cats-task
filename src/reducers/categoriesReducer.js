import { GET_CATEGORIES_SUCCESS } from "../utils/actionTypes";


export  function catsCategoriesReducer(state = [], action) {
    console.log(action);
switch(action.type){
    case GET_CATEGORIES_SUCCESS : {
        return action.categories;
    }
    default: return state
}
}