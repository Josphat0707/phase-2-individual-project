import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/featured">Featured Cocktails</Link>
            </li>
            <li>
                <Link to="/cocktails">Cocktail List</Link>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar