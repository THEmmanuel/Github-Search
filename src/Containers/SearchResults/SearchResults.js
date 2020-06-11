import React from 'react';
import UserCard from '../../Components/Cards/UserCard/UserCard'
import RepositoryCard from '../../Components/Cards/RepositoryCard/RepositoryCard'
import style from './SearchResults.module.css'

const dummyArray = ["Hey", "This", "Is", "A", "User"];

const userCards = dummyArray.map(user => <UserCard />)
const SearchResults = () => {
    return (
        <div className = {style.SearchResults}>
            {userCards}
        </div>
    )
}

export default SearchResults