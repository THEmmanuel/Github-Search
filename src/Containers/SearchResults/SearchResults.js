import React from 'react';
import style from './SearchResults.module.css'

const SearchResults = (props) => {
    return (
        <div className = {style.SearchResults}>
            {props.children}
        </div>
    )
}

export default SearchResults