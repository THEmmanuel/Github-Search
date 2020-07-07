import React from 'react';
import style from './UserDetails.module.css';
import UserAccountInfo from '../../Components/UserAccountInfo/UserAccountInfo';
import UserInfo from '../UserInfo/UserInfo';
import RepositoryCard from '../../Components/Cards/RepositoryCard/RepositoryCard';

const UserDetails = (props) => {
    return (
        <div className = {style.UserDetails}>
            <UserAccountInfo/>
            <RepositoryCard/>
            <UserInfo/>
        </div>
    )
}

export default UserDetails