import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

function SearchBar() {
    const [searchTerm, setSearchTerm]=useState(``);
    const history=useHistory();

    function handleChange(e) {
        setSearchTerm(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        history.push(`/cocktails?search=${encodeURIComponent(searchTerm)}`);
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