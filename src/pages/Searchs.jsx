import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import '../pages/sub-pages.css';
import { useSelector } from 'react-redux';
import '../pages/sub-pages.css';

export default function Searchs() {
	const url = 'https://api.themoviedb.org/3/search/movie?';
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

	const [movieData, setMovieData] = useState([]);
	const images = 'https://image.tmdb.org/t/p/w500';
	const movieName = useSelector((state) => state.inputReducer);

	useEffect(() => {
		if (!movieName) {
			return;
		}
		try {
			async function fetchData() {
				const {
					data: { results },
				} = await axios.get(url, {
					params: {
						api_key: API_KEY,
						query: movieName,
					},
				});
				setMovieData(results.filter((images) => images.poster_path !== null));
			}
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, [movieName]);

	return (
		<div className='search'>
			{movieData.map((movie) => {
				return (
					<div className='search-info' key={movie.id}>
						<Link to={`details/${movie.id}`}>
							<img src={`${images}${movie.poster_path}`} alt='' />
						</Link>
						<h3>{movie.title} </h3>
						<h5>Rating: {movie.vote_average}</h5>{' '}
					</div>
				);
			})}
		</div>
	);
}
