import React from 'react';
import style from './SearchResults.module.css'
// import UserCard from '../../Components/Cards/UserCard/UserCard';

const SearchResults = (props) => {
    return (
        <div className = {style.SearchResults}>
            {props.children}
        </div>
    )
}

export default SearchResults