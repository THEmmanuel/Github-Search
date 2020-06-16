import React from 'react';
// import UserCard from '../../Components/Cards/UserCard/UserCard'
// import RepositoryCard from '../../Components/Cards/RepositoryCard/RepositoryCard'
import style from './SearchResults.module.css'

const SearchResults = (props) => {
    return (
        <div className = {style.SearchResults}>
            {props.children}
        </div>
    )
}

export default SearchResults