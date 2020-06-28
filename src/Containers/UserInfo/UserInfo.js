import React, {useState, useEffect} from 'react';
import ProfilePicture from '../../Components/ProfilePicture/ProfilePicture';
import style from './UserInfo.module.css';
import githubAPI from '../../API/github';
import RespositoryCard from '../../Components/Cards/RepositoryCard/RepositoryCard'

/*
- Pass the username as props from the search component.
- Use the passed data/props to fetch the respective repo information from the api
- Display components with the recieved data. 
*/


const UserInfo = (props) => {

    const [state, setstate] = useState(
        {
            userName : props.user
        }
    )


    // const userRepoHandler = () => {
    //     githubAPI.get(props.user.repos_url)
    //         .then(response =>
    //             <div>
    //                 <RespositoryCard/>
    //             </div>
    //         )
    // }

    // useEffect(
    //     // console.log(props)
    // )


    return (
        <div>
             hey hey hey        
        </div>
    )
}

export default UserInfo
