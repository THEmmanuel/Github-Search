import React from 'react'
import UserCard from './Components/Cards/UserCard/UserCard'
import RepositoryCard from './Components/Cards/RepositoryCard/RepositoryCard'
import ProfilePicture from './Components/ProfilePicture/ProfilePicture';

const ComponentRenderTest = () => {
    return (<>
        <UserCard />
        <RepositoryCard />
        <ProfilePicture />
    </>)
}


export default ComponentRenderTest;