import React from 'react';
import style from './RepositoryCard.module.css'

const repositoryCard = (props) => {
    return (
        <div className={style.RepositoryCard}>
            <span className={style.RepositoryName}>SomeRepo</span>

            <span className={style.RepositoryDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam doloribus saepe explicabo natus, commodi repudiandae, in obcaecati fuga, adipisci odit similique voluptatum esse sit maxime minus ut porro nihil.</span>


            <div className={style.RepositoryInformation}>
                <span className={style.RepositoryLanguage}>JavaScript</span>

                <div>
                    <span>147 stars</span>
                </div>

                <div>
                    <span>682 forks</span>
                </div>

                <div>
                    <span>Last push time 5 hours ago</span>
                </div>
            </div>

        </div>
    )
}

export default repositoryCard;