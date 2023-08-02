import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchBar from '../components/SearchBar'


function CocktailListPage() {
  return (
    <div>
        <h2>Cocktail List</h2>
        <CocktailList />
        <SearchBar />
    </div>
  )
}

export default CocktailListPage;