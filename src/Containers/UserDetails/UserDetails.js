import React from 'react';
import style from './UserDetails.module.css';
import UserAccountInfo from '../../Components/UserAccountInfo/UserAccountInfo';
import UserInfo from '../UserInfo/UserInfo';
import RepositoryCard from '../../Components/Cards/RepositoryCard/RepositoryCard';

const UserDetails = (props) => {
    return (
        <div className = {style.UserDetails}>
            <UserAccountInfo user = {props.user}/>
            {/* <RepositoryCard/>0 */}
            <UserInfo user = {props.user}/>
        </div>
    )
}

export default UserDetails;