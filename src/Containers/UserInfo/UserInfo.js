import React, { useState, useEffect } from 'react';
import ProfilePicture from '../../Components/ProfilePicture/ProfilePicture';
import style from './UserInfo.module.css';
import githubAPI from '../../API/github';
import RepositoryCard from '../../Components/Cards/RepositoryCard/RepositoryCard';
import moment from 'moment'
// const testingArray = [
//     1, 2, 3, 4
// ];

const UserInfo = (props) => {

    // const [accountStats, setAccountStats] = useState()
    const [repositories, setRepositories] = useState([])



    const userRepoHandler = user => {
        githubAPI.get(`users/${user}/repos?sort=updated&direction=desc`)
            .then(response => {
                setRepositories(repositories.concat(response.data))
                // console.log(response.data)
            })
    }

    useEffect(() => {
        userRepoHandler(props.user)
        return console.log(repositories)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const now = (moment())
    console.log(now)


    return (
        <div style={style.UserInfo}>
            {
                repositories.map(repository => {
                    return <RepositoryCard
                        name={repository.name}
                        description={repository.description}
                        language={repository.language}
                        stars={repository.stargazers_count}
                        forks={repository.forks_count}
                        pushTime={repository.updated_at}
                        key={repository.id}
                    />
                })
            }
        </div>
    )
}

//Show the user account info in it's own component.
//Create a new container component UserAccountInfo that'll display the Repositories fetched here and the User account stats
//Display the time as it should be
//Sort the repos according to time

export default UserInfo;