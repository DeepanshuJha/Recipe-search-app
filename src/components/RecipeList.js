import React from 'react'

export const RecipeList = ({ recipe }) => {
    return (
        <div>
            <h3>{recipe.label}</h3>                
            <img src={recipe.image} alt=""></img>
        </div>
    )
}
