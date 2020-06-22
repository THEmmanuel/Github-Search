import React, {useState} from 'react';
import ProfilePicture from '../../Components/ProfilePicture/ProfilePicture';
import style from './UserInfo.module.css';
import RepositoryCard from '../Cards'
import githubAPI from '../../API/github';
import RespositoryCard from '../../Components/Cards/RepositoryCard/RepositoryCard'

/*
- Pass the username as props from the search component.
- Use the passed data/props to fetch the respective repo information from the api
- Display components with the recieved data. 
*/


const userInfo = props => {

    const userRepoHandler = () => {
        githubAPI.get(`/user/${props.userName}/repos`)
            .then(response =>
                <div>
                    Respository cards will appear here
                </div>
            )
    }

    return (
        <div>
            
        </div>
    )
}

export default userInfo
