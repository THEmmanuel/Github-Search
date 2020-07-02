import React, { useState, useEffect } from 'react';
import ProfilePicture from '../../Components/ProfilePicture/ProfilePicture';
import style from './UserInfo.module.css';
import githubAPI from '../../API/github';
import RespositoryCard from '../../Components/Cards/RepositoryCard/RepositoryCard'

/*
- Pass the username as props from the search component.... done!
- Use the passed data/props to fetch the respective repo information from the api... pending
- Display components with the recieved data. 
*/


const UserInfo = (props) => {

    // const [accountStats, setAccountStats] = useState()
    const [repositories, setRepositories] = useState([])


    useEffect(() => {
        userRepoHandler(props.user)
        return console.log(props.user + repositories)
    })


    const userRepoHandler = user => {
        githubAPI.get(`users/${user}/repos`)
            .then(response => {
                setRepositories(response)
                // console.log(response)
            }
            )
    }


    return (
        <div style={{
            color: 'yellow'
        }}>
            hey, I recieved {props.uaer}
        </div>
    )
}

//Show the user account info in it's own component.

export default UserInfo
