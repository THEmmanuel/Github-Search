import React from 'react'
import UserCard from './Components/Cards/UserCard/UserCard'
import RepositoryCard from './Components/Cards/RepositoryCard/RepositoryCard'
import ProfilePicture from './Components/ProfilePicture/ProfilePicture';
import Error from './Components/Error/Error';
import Spinner from './Components/Spinner/Spinner';
import UserDetails from './Containers/UserDetails/UserDetails'


const style = {
    margin : 'auto'
}

const ComponentRenderTest = () => {
    return (
    <div style = {style}>
        <UserCard />
        <RepositoryCard />
        <ProfilePicture />
        <Error/>
        <Spinner/>
        <UserDetails/>
    </div>
    )
}


export default ComponentRenderTest;