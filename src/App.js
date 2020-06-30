import React, { useReducer } from 'react';
import Search from './Containers/Search/Search';
import SearchResults from './Containers/SearchResults/SearchResults'
import ComponentRenderTest from './componentRenderTest'
import UserCard from './Components/Cards/UserCard/UserCard'
import Spinner from './Components/Spinner/Spinner'
import githubApi from './API/github'
import Error from './Components/Error/Error'
import './App.css';

const initialState = {
	isLoading: false,
	searchResults: [],
	errorMessage: null,
	// error : true
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'USER_SEARCH_REQUEST':
			return {
				...state,
				isLoading: true,
				errorMessage: null
			};

		case 'USER_SEARCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				searchResults: action.payload
			};

		case 'USER_SEARCH_FAILURE':
			return {
				...state,
				isLoading: false,
				errorMessage: action.error
			};

		default: return state
	}
};


const App = () => {

	const [state, dispatch] = useReducer(reducer, initialState)


	const userSearch = (searchValue) => {
		// console.log('pretending to search for ' + searchValue)
		// githubApi.get(`users?q=${searchValue}`)
		dispatch({
			type: 'USER_SEARCH_REQUEST'
		});

		githubApi.get(`users?q=${searchValue}`)
			.then(response => {
				dispatch({
					type: 'USER_SEARCH_SUCCESS',
					payload: response.data.items
				})
			})

			.catch(
				error => {
					dispatch({
						type: 'USER_SEARCH_FAILURE',
						payload: error
					})
				}
			)
	}
	//Search function ends here.

	const { isLoading, searchResults, errorMessage } = state

	return (
		<div className="App">
			<Search search={userSearch} />
			
			<SearchResults>
				{
					isLoading && !errorMessage ?
						<Spinner /> :
						errorMessage ? (
							<Error />
						) : (
								searchResults.map(user => {
									return (<UserCard
										userImage={user.login}
										userName={user.avatar_url}
									/>)
								})
							)
				}
			</SearchResults>
			<ComponentRenderTest />
		</div>
	)
}
export default App;