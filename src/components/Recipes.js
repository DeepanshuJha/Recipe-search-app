import React, { Fragment, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { RecipeList } from './RecipeList';

export const Recipes = () => {    
    const { setRecipe, recipeData, query } = useContext(GlobalContext);    

    useEffect(() => {
        setRecipe();
    }, [query]);
    
    return (
        <div>
            {
                recipeData.map((r) => (
                    <Fragment key={parseInt(Math.random() * 1000000)}>
                    <RecipeList key={r.recipe.label} recipe={r.recipe} />
                    </Fragment>
                ))
            }
        </div>
    )
}
