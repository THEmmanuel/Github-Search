import React from 'react';
import style from './SearchBar.module.css';

const SearchBar = (props) => {
    return (
        <input type = 'text' className = {style.SearchBar} placeholder = 'Enter a username.' onChange = {props.changed}>
        </input>
    )
}

export default SearchBar;