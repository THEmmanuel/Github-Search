import React from 'react';
import UserCard from '../../Components/Cards/UserCard/UserCard'

const dummyArray = ["Hey", "This", "Is", "A", "User"];

const userCards = dummyArray.map(user => <UserCard />)
const SearchResults = () => {
    return (
        <div>
            {userCards}
        </div>
    )
}

export default SearchResults