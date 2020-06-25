import React, { useState, useEffect } from 'react';
import style from './Search.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchButton from '../../Components/SearchButton/searchButton'
import githubAPI from '../../API/github';
import SearchResults from '../SearchResults/SearchResults';
import UserCard from '../../Components/Cards/UserCard/UserCard';
import Error from '../../Components/Error/Error';
import UserInfo from '../UserInfo/UserInfo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Search = () => {

    const [state, setState] = useState(
        {
            userInput: '',
            userSearchSucessful: null,
            searchResults: [],
            selectedUser : null
        })


    const userInputHandler = (event) => {
        setState({
            ...state,
            userInput: event.target.value
        }
        )
    }

    // useEffect    

    const userSearchHandler = () => {
        githubAPI.get(`users?q=${state.userInput}`)
            .then(response => setState({
                ...state,
                searchResults: response.data.items,
                userSearchSucessful: true
            }),
                console.log(state)
            )
            .catch(err => {
                console.log('there was an error' + err);
                setState({
                    ...state,
                    userSearchSucessful: false,
                })
            }
            )
    };

    const userSelectedHandler = (userName) => {
        setState({
            ...state,
            selectedUser : userName
        })
        console.log(userName + 'I was called')
    }

    let results = state.searchResults.map(user => {
        return (
            <Router>
                <Link to={`user/${user.login}`}>
                    <UserCard
                        userImage={user.avatar_url}
                        userName={user.login}
                        key={user.id}
                        clicked = {() => userSelectedHandler(user.login)}>
                    </UserCard>
                </Link></Router>
        )
        //Current challenge dynamically at the links to the repos with the matching usernames
    })

    const userLogin = state.searchResults.map(user => user.login)

    // console.log(userLogin)

    // results = <p>search for something</p>

    return (
        <>
            <div className={style.Search}>
                <SearchBar changed={userInputHandler} value={state.userInput} />
                <SearchButton clicked={userSearchHandler} />
            </div>

            <SearchResults>
                {state.userSearchSucessful === true ? results : <Error />}
            </SearchResults>
            
            <Router>
                <Switch>
                    <Route exact path = {`/user/${userLogin}`}>
                        <UserInfo user = {userLogin}/>
                    </Route>
                </Switch>
            </Router>

            )
        </>
    )


    //Find a waay to pass the login object for a single user as props to the userInfo component

}
export default Search;