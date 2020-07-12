import React, { useReducer, useState } from 'react';
//Component Imports
import Search from './Containers/Search/Search';
import SearchResults from './Containers/SearchResults/SearchResults';
import ComponentRenderTest from './componentRenderTest';
import UserCard from './Components/Cards/UserCard/UserCard';
import Spinner from './Components/Spinner/Spinner';
import Error from './Components/Error/Error';
import UserInfo from './Containers/UserInfo/UserInfo';
import './App.css';
//API import
import githubApi from './API/github';
//Router import
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
				// selectedUser
			}

		default: return state
	}
};

const App = () => {

	const [selectedUser, setSelectedUser] = useState('')
	const [state, dispatch] = useReducer(reducer, initialState)


	const userSearch = (searchValue) => {
		// console.log('pretending to search for ' + searchValue)
		// githubApi.get(`users?q=${searchValue}`)
		dispatch({
			type: 'USER_SEARCH_REQUEST'
		});

		githubApi.get(`/search/users?q=${searchValue}`)
			.then(response => {
				dispatch({
					type: 'USER_SEARCH_SUCCESS',
					payload: response.data.items
				})
				console.log(response)
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
	//userSearch function ends here.

	const userSelectedHandler = userName => {
		setSelectedUser(userName);
	}

	const { isLoading, searchResults, errorMessage } = state

	return (
		// <Router>
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
											<Link to={`/user/${selectedUser}`} key={user.id}>
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
				{/* <ComponentRenderTest /> */}

					<Route exact path='/user/:userName' component={() => <UserDetails user={selectedUser} />} />
					{/* // </Route> */}
				</Switch>
			</div>


		</>
		// </Router>

	)
}

export default App;