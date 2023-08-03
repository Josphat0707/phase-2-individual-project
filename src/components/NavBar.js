import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function NavBar() {
  return (
    <div className='navbar'>
        <nav className='nav-container'>
            <ul className='nav-links'>
                <li>
                    <Link to="/">Home</Link>
                </li><br/>
                <li>
                    <Link to="/featured">Featured Cocktails</Link>
                </li><br/>
                <li>
                    <Link to="/cocktails">Cocktail List</Link>
                </li><br/>
            </ul>
        </nav>
    </div>    
  );
}

export default NavBar