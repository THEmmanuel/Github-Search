import React, { useReducer, useState } from 'react';
import Search from './Containers/Search/Search';
import SearchResults from './Containers/SearchResults/SearchResults';
import UserCard from './Components/Cards/UserCard/UserCard';
import Spinner from './Components/Spinner/Spinner';
import Error from './Components/Error/Error';
import './App.css';
import githubApi from './API/github';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserDetails from './Containers/UserDetails/UserDetails';


const initialState = {
	isLoading: false,
	searchResults: [],
	errorMessage: null,
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

		case 'GET_SELECTED_USER':
			return {
				...state,
			}

		default: return state
	}
};

const App = () => {

	const [selectedUser, setSelectedUser] = useState('')
	const [state, dispatch] = useReducer(reducer, initialState)


	const userSearch = (searchValue) => {
		dispatch({
			type: 'USER_SEARCH_REQUEST'
		});

		githubApi.get(`/search/users?q=${searchValue}`)
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

	const { isLoading, searchResults, errorMessage } = state

	const userSelectedHandler = userName => {
		setSelectedUser(userName);
	}

	return (

		<>
			<div className="App">
				<Search search={userSearch} />
				<Switch>
				<Route exact path='/'>
				<SearchResults>
					{
						isLoading && !errorMessage ?
							
							<Spinner /> :
							errorMessage ? (
								<Error />
							) : (
									searchResults.map(user => {
										return (
											<Link to={`/user/${user.login}`} key={user.id}>
												<UserCard
													userName={user.login}
													userImage={user.avatar_url}
													clicked={() => userSelectedHandler(user.login)}
												/>
											</Link>
										)
									})
								)
					}
				</SearchResults>
				</Route>
					<Route path='/user/:userName' component={() => <UserDetails user={selectedUser} />} />
				</Switch>
			</div>


		</>

	)
}

export default App;