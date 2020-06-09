import React from 'react'
import style from './searchButton.module.css';

const SearchButton = props => 
    <button className = {style.SearchButton} onClick = {props.clicked}>
        Search
    </button>


export default SearchButton;