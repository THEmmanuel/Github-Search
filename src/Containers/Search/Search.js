import React, { useState, useEffect } from 'react';
import style from './Search.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchButton from '../../Components/SearchButton/searchButton'
import githubAPI from '../../API/github';
import SearchResults from '../SearchResults/SearchResults';
import UserCard from '../../Components/Cards/UserCard/UserCard';
import Error from '../../Components/Error/Error';

const Search = () => {

    const [userInput, setUserInput] = useState({ userInput: '' })
    const [userSearch, setSearchStatus] = useState({ userSearch: true });
    const [searchResults, setSearchResults] = useState({ results: [] })


    const userInputHandler = (event) => {
        setUserInput(event.target.value)
    }

    const dummyResponse = ['one', 'two', 'three', 'four']

    const userSearchHandler = () => {
        githubAPI.get(`users?q=${userInput}`)
            .then(response => setSearchResults({results : response.data}),
                setSearchStatus({ userSearch: true }))
            .catch(err => {
                console.log('there was an error' + err);
                setSearchStatus({ userSearch: false })
            }
        )
    };

    let results = searchResults.results.map(user => <UserCard/>)

    return (
        <>
            <div className={style.Search}>
                <SearchBar changed={userInputHandler} value={userInput} />
                <SearchButton clicked={userSearchHandler} />
            </div>

            <SearchResults>
                {/* {results} */}
                {userSearch === true ? results : <Error />}
            </SearchResults>

        </>
    )
}

export default Search;