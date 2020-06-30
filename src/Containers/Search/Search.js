import React, { useState } from 'react';
import style from './Search.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchButton from '../../Components/SearchButton/searchButton'


const Search = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const userInputHandler = (e) => {
        setSearchValue(e.target.value)
    }

    const userInputResetHandler = () => {
        setSearchValue('')
    }

    const userSearchHandler = (e) => {
        e.preventDefault();
        props.search(searchValue)
        userInputResetHandler();
    }

    return (
        <form className={style.Search}>
            <SearchBar
                changed={userInputHandler}
                value={searchValue} />

            <SearchButton clicked={userSearchHandler} />
        </form>
    )

}
export default Search;