import React from 'react'
import { useParams } from 'react-router-dom'
import CocktailDetail from '../components/CocktailDetail'

function CocktailDetailPage() {
    const{id}=useParams();

  return (
    <div>
        <h2>Cocktail Detail</h2>
        <CocktailDetail id={id} />
    </div>
  )
}

export default CocktailDetailPage