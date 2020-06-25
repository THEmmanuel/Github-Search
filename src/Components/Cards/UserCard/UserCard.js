import React from 'react';
import style from './UserCard.module.css'

import ProfilePicture from '../../ProfilePicture/ProfilePicture';

const UserCard = (props) => {
    return (
        <div className={style.UserCard} onClick = {props.clicked}>
            <img src={props.userImage} className={style.ProfilePicture} alt='profile' />
            <span className={style.UserName}>{props.userName}</span>
        </div>
    )
}


export default UserCard;