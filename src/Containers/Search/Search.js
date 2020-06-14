import React, {useState, useEffect} from 'react';
import style from './Search.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchButton from '../../Components/SearchButton/searchButton'
import githubAPI from '../../API/github';

const Search = () => {

    const [userInput, setUserInput] = useState({
        userInput : ''
    })

    const userInputHandler = (event) => {
        setUserInput(event.target.value)
    }

    useEffect(() => {
        githubAPI.get(`users?q=${userInput}`)
        .then(response => console.log(response))
        .catch(err => console.log('there was an error' + err));
    })

    return (
        <div className = {style.Search}>
            <SearchBar />
            <SearchButton  />
        </div>
    )
}

export default Search;

// const [one, two, three] = [1, 2, 3];
// console.log(one, two, three)