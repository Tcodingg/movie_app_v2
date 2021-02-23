import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './sub-pages.css';

export default function Details({ match }) {
	const [movieData, setMovieData] = useState([]);
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
	const url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}`;
	const images = 'https://image.tmdb.org/t/p/w500';

	useEffect(() => {
		async function fetchMovie() {
			const { data } = await axios.get(url);

			setMovieData(data);
		}
		fetchMovie();
	}, []);
	// console.log(movieData);

	return (
		<div className='details'>
			<h3>{movieData.title} </h3>
			<img src={`${images}${movieData.poster_path}`} alt='' />
			<div className='rating-year'>
				<h5>Rating: {movieData.vote_average}</h5>
				<h5>Year: {movieData.release_date}</h5>
			</div>

			<p>{movieData.overview} </p>
		</div>
	);
}
