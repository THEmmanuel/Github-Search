import React, { useState, useEffect } from 'react';
import style from './UserAccountInfo.module.css'
import githubAPI from '../../API/github';

const UserAccountInfo = (props) => {

    const [accountInfo, setAccountInfo] = useState({
        followers: null,
        followings: null,
        repos: null,
        profileImage: null,
        location: '',
        company: '',
        website: ''
    })



    const userAccountFollowersHandler = user => {
        githubAPI.get(`users/${user}`)
            .then((response => {
                setAccountInfo({
                    followers: response.data.followers,
                    followings: response.data.following,
                    repos: response.data.public_repos,
                    profileImage: response.data.avatar_url,
                    location: response.data.location,
                    company: response.data.company,
                    website: response.data.blog

                })
                // console.log(response.data)
            }))
    }

    // console.log(accountInfo)

    useEffect(() => {
        userAccountFollowersHandler(props.user)
        console.log(accountInfo)
    }, [])
    // const userFollowingsHandler = null
    // const userRepositoriesHandler = null

    return (

        <div className={style.UserAccountInfo}>
            <div className={style.ProfilePicture}>
                <img src={accountInfo.profileImage} alt="" />
            </div>


            <div className={style.UserInfo}>
                <span className={style.UserName}>{props.user}</span>

                <div className={style.WorkInfos}>
                    <div className={style.WorkInfo}>
                        <img src="" alt="" />
                        <span>{accountInfo.company}</span>
                    </div>

                    <div className={style.WorkInfo}>
                        <img src="" alt="" />
                        <span>{accountInfo.location}</span>
                    </div>

                    <div className={style.WorkInfo}>
                        <img src="" alt="" />
                        <span>{accountInfo.website}</span>
                    </div>

                </div>
            </div>

            <div className={style.Stats}>
                <div>
                    <span className={style.StatsCount}>{accountInfo.followers}</span>
                    <br />
                    <span className={style.StatsText}>followers</span>

                </div>

                <div>
                    <span className={style.StatsCount}>{accountInfo.followings}</span>
                    <br />
                    <span className={style.StatsText}>following</span>

                </div>

                <div>
                    <span className={style.StatsCount}>{accountInfo.repos}</span>
                    <br />
                    <span className={style.StatsText}>Repositories</span>
                </div>
            </div>
        </div>
    )
}

export default UserAccountInfo;

//This can still be further broken down into components yunno