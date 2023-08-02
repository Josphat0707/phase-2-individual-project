import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [searchTerm, setSearchTerm]=useState(``);
    const navigate = useNavigate();

    function handleChange(e) {
        setSearchTerm(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        navigate.push(`/cocktails?search=${encodeURIComponent(searchTerm)}`);
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder='Search for Cocktails'/>
            <button type="submit">Search</button>
        </form>
    </div>
  );
}

export default SearchBar;