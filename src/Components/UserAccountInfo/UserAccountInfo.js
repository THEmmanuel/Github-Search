import React from 'react';
import style from '../../Components/UserAccountInfo/UserAccountInfo.module.css'

const UserAccountInfo = () => {
    return (
        <div className={style.UserAccountInfo}>
            <div>
                <img src="" alt="" className={style.ProfilePicture} />
            </div>

            <div>
                <span className={style.UserName}>UserX</span>
                <div className={style.WorkInfos}>

                    <div className={style.WorkInfo}>
                        <img src="" alt="" />
                        <span></span>
                    </div>

                    <div className={style.WorkInfo}>
                        <img src="" alt="" />
                        <span></span>
                    </div>

                    <div className={style.WorkInfo}>
                        <img src="" alt="" />
                        <span></span>
                    </div>

                </div>
            </div>

            <div>
                <span className={style.StatsCount}>10</span>
                <span className={style.StatsCount}>10</span>
                <span className={style.StatsCount}>10</span>
            </div>
        </div>
    )
}

export default UserAccountInfo;