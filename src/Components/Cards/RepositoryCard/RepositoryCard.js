import React from 'react';
import style from './RepositoryCard.module.css'

const repositoryCard = (props) => {
    return (
        <div className = {style.RepositoryCard}>
            <span className = 'RepositoryName'>SomeRepo</span>
            
            <span className = 'RepositoryDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam doloribus saepe explicabo natus, commodi repudiandae, in obcaecati fuga, adipisci odit similique voluptatum esse sit maxime minus ut porro nihil.</span>

            <span>JavaScript</span>
            <span>147 stars</span>
            <span>682 forks</span>
            <span>Last push time</span>
        </div>
    )
}

export default repositoryCard;