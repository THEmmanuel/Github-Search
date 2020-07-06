import React from 'react'
import UserCard from './Components/Cards/UserCard/UserCard'
import RepositoryCard from './Components/Cards/RepositoryCard/RepositoryCard'
import ProfilePicture from './Components/ProfilePicture/ProfilePicture';
import Error from './Components/Error/Error';
import UserInfo from './Containers/UserInfo/UserInfo'
import Spinner from './Components/Spinner/Spinner';
import UserAccountInfo from './Components/UserAccountInfo/UserAccountInfo'


const style = {
    // backgroundColor : '#00FF00',
    // opacity : '75%'
    margin : 'auto'
}

const ComponentRenderTest = () => {
    return (
    <div style = {style}>
        <UserCard />
        <RepositoryCard />
        <ProfilePicture />
        {/* <UserInfo/> */}
        <Error/>
        <Spinner/>
        <UserAccountInfo/>
    </div>
    )
}


export default ComponentRenderTest;