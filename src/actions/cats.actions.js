import { dispatch } from "../helper/useDispatchHook";
import { catsService } from "../services/catsService";
import { GET_CATEGORIES_FAIL,
         GET_CATEGORIES_SUCCESS } from "../utils/actionTypes";
         

export const catsActions = {
    getCatsCategories
}

    function getCatsCategories() {
        
       return catsService.GetInfo("https://api.thecatapi.com/v1/categories").then(response => {
          dispatch(success(response))
        }).catch((err) => dispatch(fail(err)))
    
    function success (categories) { 
        return { type: GET_CATEGORIES_SUCCESS, categories }
    }
    function fail (err)  { return {type: GET_CATEGORIES_FAIL, err}}
}