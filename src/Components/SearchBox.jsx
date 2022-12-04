import React from 'react';
import '../css/App.css'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='search-bar'>
            <input
                type='search'
                placeholder='Search items'
                onChange={searchChange} />
        </div>
    );
}
export default SearchBox;
