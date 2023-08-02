import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CocktailList() {
  const[cocktails, setCocktails]= useState([]);
  const[searchTerm, setSearchTerm]= useState(``);

  useEffect(()=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`)
    .then((response)=>response.json())
    .then((data)=>setCocktails(data.drinks || []))
    .catch((error)=> console.log(error));
  },[searchTerm]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <h2>Cocktail List</h2>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for Cocktail"/>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <link to={`/cocktails/${cocktail.idDrink}`}>{cocktail.strDrink}</link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CocktailList