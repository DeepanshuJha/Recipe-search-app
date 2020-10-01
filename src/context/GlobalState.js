import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const intialState = {
    recipeData : [],
    query : 'chicken'
};

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    async function setRecipe(){
        const APP_ID = "46d69343";
        const APP_KEY = "4957917c8c6b6c2cf2f41d30d7541810";
        const url = `https://api.edamam.com/search?q=${state.query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        const response = await fetch(url);
        const data = await response.json();
        dispatch({
            type: 'FETCH_DATA',
            payload: data.hits
        })
    }

    function updateQuery(q){
        dispatch({
            type: 'UPDATE_QUERY',
            payload: q
        })
    }

    return (
        <GlobalContext.Provider value={{
            recipeData: state.recipeData,
            query: state.query,
            setRecipe,
            updateQuery     
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

