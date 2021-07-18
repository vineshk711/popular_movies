import React, { useState, useEffect }from "react";

import MovieListHeading from './MovieListHeading';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import MovieList from './Movielist'
import NavBar from './NavBar'
import { addFavourites, removeFavourites } from "../actions";


export default function MovieApp(props) {
	const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};


	return (
		<div className='container-fluid movie-app'>
		  <NavBar/>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Popular Movies' />
			</div>
			<div className='row'>
				<MovieList
					results={props.results}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					results={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	)
}
