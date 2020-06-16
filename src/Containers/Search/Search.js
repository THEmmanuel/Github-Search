import React, { useState, useEffect } from 'react';
import style from './Search.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchButton from '../../Components/SearchButton/searchButton'
import githubAPI from '../../API/github';
import SearchResults from '../SearchResults/SearchResults';
import Usercard from '../../Components/Cards/UserCard/UserCard';

const Search = () => {

    const [userInput, setUserInput] = useState({
        userInput: ''
    })

    const userInputHandler = (event) => {
        setUserInput(event.target.value)
    }

    useEffect(() => {
        console.log('heya')
    })

    const dummyResponse = ['one', 'two', 'three', 'four']

    const userCards = dummyResponse.map(user => <Usercard />)

    const responseResults = null

    const userSearchHandler = () => {
        githubAPI.get(`users?q=${userInput}`)
            .then(response => response = responseResults)
            .catch(err => console.log('there was an error' + err));
    }

    console.log(responseResults)

    return (
        <>
            <div className={style.Search}>
                <SearchBar changed={userInputHandler} value={userInput} />
                <SearchButton clicked={userSearchHandler} />
            </div>

            <SearchResults>
                {userCards}
            </SearchResults>

        </>
    )
}

export default Search;