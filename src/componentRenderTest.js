import React from 'react'
import UserCard from './Components/Cards/UserCard/UserCard'
import RepositoryCard from './Components/Cards/RepositoryCard/RepositoryCard'
import ProfilePicture from './Components/ProfilePicture/ProfilePicture';
import Error from './Components/Error/Error';

const style = {
    // backgroundColor : '#00FF00',
    opacity : '75%'
}

const ComponentRenderTest = () => {
    return (
    <div style = {style}>
        <UserCard />
        <RepositoryCard />
        <ProfilePicture />
        <Error/>
    </div>
    )
}


export default ComponentRenderTest;