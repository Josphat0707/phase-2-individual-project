import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FeaturedCocktail() {
    const [featuredCocktails, setFeaturedCocktails]=useState([]);

    useEffect(()=> {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data.drinks);
            setFeaturedCocktails(data.drinks.slice(0,5))
        })
        .catch((error)=>console.log(error))
    },[]);
  return (
    <div className='featured-cocktails'>
        <h2>Featured Cocktails</h2>
        <ul>
            {featuredCocktails.map((cocktail) => (
                <li key={cocktail.idDrink}>
                    <Link to={`/cocktails/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
                </li>
            ))};
        </ul>
    </div>
  );
};

export default FeaturedCocktail;