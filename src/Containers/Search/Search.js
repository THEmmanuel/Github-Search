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
            selectedUser: null
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
            selectedUser: userName
        })
        console.log(state)
    }

    let results = state.searchResults.map(user => {
        return (
            <Router>
                <Link to={`/user/${user.login}`} key={user.id}>
                    <UserCard
                        userImage={user.avatar_url}
                        userName={user.login}
                        clicked={() => userSelectedHandler(user.login)}>
                    </UserCard>
                </Link>
            </Router>
        )
    })

    const userLogin = state.selectedUser;

    return (
        <>

            <Router>
                <div className={style.Search}>
                    <SearchBar changed={userInputHandler} value={state.userInput} />
                    <SearchButton clicked={userSearchHandler} />
                </div>

                <SearchResults>
                    {state.userSearchSucessful === true ? results : <Error />}
                </SearchResults>

                <Switch>
                    <Route path='/' exact>
                        <SearchResults />
                    </Route>

                    <Route path='/user/:userName' exact >
                        <UserInfo user={userLogin} />
                    </Route>
                </Switch>
            </Router>

    )
        </>
    )

    // `/user/${userLogin}`

    //Find a waay to pass the login object for a single user as props to the userInfo component.--- done.

    //Find a way to load the userInfo object in a route as a seperate page.


}


export default Search;