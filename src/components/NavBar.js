import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <link to="/">Home</link>
            </li>
            <li>
                <link to="/featured">Featured Cocktails</link>
            </li>
            <li>
                <link to="/cocktails">Cocktail List</link>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar