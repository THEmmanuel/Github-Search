import React, { useState, useEffect } from 'react';
import style from './UserInfo.module.css';
import githubAPI from '../../API/github';
import RepositoryCard from '../../Components/Cards/RepositoryCard/RepositoryCard';
import moment from 'moment'

const UserInfo = (props) => {

    const [repositories, setRepositories] = useState([])

    const userRepoHandler = user => {
        githubAPI.get(`users/${user}/repos?sort=updated&direction=desc`)
            .then(response => {
                setRepositories(repositories.concat(response.data))
            })
    }

    useEffect(() => {
        userRepoHandler(props.user)
        return console.log(repositories)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={style.UserInfo}>
            {
                repositories.map(repository => {
                    return <RepositoryCard
                        name={repository.name}
                        description={repository.description}
                        language={repository.language}
                        stars={repository.stargazers_count}
                        forks={repository.forks_count}
                        pushTime={moment(repository.updated_at).format('DD-MMMM-YYYY HH:MM')}
                        key={repository.id}
                    />
                })
            }
        </div>
    )
}

export default UserInfo;