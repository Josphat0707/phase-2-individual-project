import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CocktailDetail() {
    const{id}= useParams();
    const[cocktail, setCocktail] = useState(null);

    useEffect(()=> {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`)
        .then((response)=>response.json())
        .then((data)=>setCocktail(data.drinks[0]))
        .catch((error)=> console.log(error));
    },[id]);

    if(!cocktail) {
        return <div>Loading...</div>
    };


  return (
    <div>
        <h2>Drink: {cocktail.strDrink}</h2>
        <p>Category: {cocktail.strCategory}</p>
        <p>Alcoholic or Non Alcoholic: {cocktail.strAlcoholic}</p>
        <p>Glass: {cocktail.strGlass}</p>
        <p>Ingridient 1: {cocktail.strIngredient1}</p>
        <p>Ingredient 2: {cocktail.strIngredient2}</p>
        <p>Ingredient 3: {cocktail.strIngredient3}</p>
        <p>Measurement 1: {cocktail.strMeasure1}</p>
        <p>Instructions: {cocktail.strInstructions}</p>
        <p>{cocktail.strDrinkThumb}</p>
    </div>
  );
}

export default CocktailDetail;