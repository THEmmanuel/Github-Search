import React, { useState, useEffect } from 'react';
import style from './Search.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchButton from '../../Components/SearchButton/searchButton'
import githubAPI from '../../API/github';
import SearchResults from '../SearchResults/SearchResults';
import UserCard from '../../Components/Cards/UserCard/UserCard';
import Error from '../../Components/Error/Error';

const Search = () => {

    const [state, setState] = useState(
        {
            userInput: '',
            userSearchSucessful: null,
            searchResults: []
        })
    // const [userSearch, setSearchStatus] = useState({ userSearch: true });
    // const [searchResults, setSearchResults] = useState({ results: [] })


    const userInputHandler = (event) => {
        setState({
            ...state,
            userInput: event.target.value
        }
        )
    }

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


    let results = state.searchResults.map(user => <UserCard userImage = {user.avatar_url} userName = {user.login}></UserCard>)

    return (
        <>
            <div className={style.Search}>
                <SearchBar changed={userInputHandler} value={state.userInput} />
                <SearchButton clicked={userSearchHandler} />
            </div>

            <SearchResults>
                {state.userSearchSucessful === true ? results : <Error />}
            </SearchResults>

        </>
    )
}

export default Search;