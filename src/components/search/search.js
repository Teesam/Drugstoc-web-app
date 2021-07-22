import './search.css';
import { useState } from 'react';

const Search = () => {

    const [ showSort, setShowSort ] = useState(false);

    return (
        <div className = 'Search'>
            <i id = 'search-icon' className="fas fa-search"></i>
            <input id = 'search-input' type = 'text' placeholder = 'Search keyword' />
            <div id = 'sort-holder'>
                <div id = 'demacate'></div>
                <p>Sort by</p>
                <button id = 'sort-button' 
                    onClick = { () => {
                        setShowSort(!showSort);
                    }

                    }
                >
                    <div id = 'ham-1'></div>
                    <div id = 'ham-2'></div>
                    <div id = 'ham-3'></div>
                </button>
            </div>

            {
                showSort ?
                
                <div id = 'sort-item-holder'>
                    <select id = 'sort-items'
                        onChange = { () => setShowSort(!showSort)}
                    >
                        <option>A - Z</option>
                        <option>Task price</option>
                    </select>
                </div>
                : ''
            }
        </div>
    )
}

export default Search;
