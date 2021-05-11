import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../redux/action';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

export default function MoviesByCategories() {
	const dispatch = useDispatch();
	const images = 'https://image.tmdb.org/t/p/w500';

	const {
		movies: { top_rated, popular_now, playing_now },
	} = useSelector((state) => state.movieReducer);

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	return (
		<div>
			{playing_now && (
				<div className='movie-content'>
					<h1>NOW PLAYING</h1>
					<div className='movies'>
						{playing_now.map((movie) => (
							<Link key={movie.id} to={`/details/${movie.id}`}>
								<img src={`${images}${movie.poster_path}`} alt='movieImage' />
							</Link>
						))}
					</div>
				</div>
			)}

			{top_rated && (
				<div className='movie-content'>
					<h1>TOP RATED</h1>
					<div className='movies'>
						{top_rated.map((movie) => (
							<Link key={movie.id} to={`/details/${movie.id}`}>
								<img src={`${images}${movie.poster_path}`} alt='movieImage' />
							</Link>
						))}
					</div>
				</div>
			)}

			{popular_now && (
				<div className='movie-content'>
					<h1>POPULAR</h1>
					<div className='movies'>
						{popular_now.map((movie) => (
							<Link key={movie.id} to={`/details/${movie.id}`}>
								<img src={`${images}${movie.poster_path}`} alt='movieImage' />
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
