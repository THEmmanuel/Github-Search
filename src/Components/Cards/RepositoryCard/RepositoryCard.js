import React from 'react';
import style from './RepositoryCard.module.css'

const repositoryCard = (props) => {
    return (
        <div className={style.RepositoryCard}>
            <span className={style.RepositoryName}>{props.name}</span>

            <span className={style.RepositoryDescription}>{props.description}</span>


            <div className={style.RepositoryInformation}>
                <span className={style.RepositoryLanguage}>{props.language}</span>

                <div>
                    <span>{props.stars}</span>
                </div>

                <div>
                    <span>{props.forks}</span>
                </div>

                <div>
                    <span>{props.pushTime}</span>
                </div>
            </div>

        </div>
    )
}

export default repositoryCard;