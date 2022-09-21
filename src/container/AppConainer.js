import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { catsActions } from "../actions/cats.actions";
import { dispatch } from "../helper/useDispatchHook";

const AppContainer = () => {
     const categories = useSelector((state) => state.rootReducer.categories);

    useEffect(() => {
        dispatch(catsActions.getCatsCategories())
    }, []);

return (<div>

</div>)
}
export default AppContainer