import React from 'react';
import style from './UserAccountInfo.module.css'

const UserAccountInfo = (props) => {
    return (
        <div className={style.UserAccountInfo}>
            <div className={style.ProfilePicture}>
                <img src="" alt="" />
            </div>


            <div className={style.UserInfo}>
                <span className={style.UserName}>THEmmanuel</span>

                <div className={style.WorkInfos}>
                    <div className={style.WorkInfo}>
                        <img src="" alt="" />
                        <span>Company X</span>
                    </div>

                    <div className={style.WorkInfo}>
                        <img src="" alt="" />
                        <span>Location X</span>
                    </div>

                    <div className={style.WorkInfo}>
                        <img src="" alt="" />
                        <span>Website X</span>
                    </div>

                </div>
            </div>

            <div className={style.Stats}>
                <div>
                    <span className={style.StatsCount}>10</span>
                    <br />
                    <span className={style.StatsText}>followers</span>

                </div>

                <div>
                    <span className={style.StatsCount}>10</span>
                    <br />
                    <span className={style.StatsText}>following</span>

                </div>

                <div>
                    <span className={style.StatsCount}>10</span>
                    <br />
                    <span className={style.StatsText}>Repositories</span>
                </div>
            </div>
        </div>
    )
}

export default UserAccountInfo;

//This can still be further broken down into components yunno