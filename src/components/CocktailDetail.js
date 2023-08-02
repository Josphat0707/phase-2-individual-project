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
        <h2>{cocktail.strDrink}</h2>
        <p>{cocktail.strInstructions}</p>
    </div>
  );
}

export default CocktailDetail;