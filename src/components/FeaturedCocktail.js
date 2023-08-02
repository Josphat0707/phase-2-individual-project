import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FeaturedCocktail() {
    const [featuredCocktails, setFeaturedCocktails]=useState([]);

    useEffect(()=> {
        fetch("")
        .then((response)=> response.json())
        .then((data)=> setFeaturedCocktails(data.drinks.slice(0,5)))
        .catch((error)=>console.log(error))
    },[]);
  return (
    <div>
        <h2>Featured Cocktails</h2>
        <ul>
            {featuredCocktails.map((cocktail)=>{
                <li key={cocktail.idDrink}>
                    <link to={`/cocktails/${cocktail.idDrink}`}>{}cocktail.strDrink</link>
                </li>
            })}
        </ul>
    </div>
  )
}

export default FeaturedCocktail;