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

	return (
		<div className='details'>
			<img src={`${images}${movieData.poster_path}`} alt='' />
			<div className='movie-description'>
				<h3>{movieData.title} </h3>

				<p>{movieData.overview} </p>
				<div className='rating-year'>
					<div className='rating'>
						<p>Rating:</p>
						<p>
							<span>{movieData.vote_average}</span>
						</p>
					</div>
					<div className='year'>
						<p>Year:</p>
						<p>
							<span>{movieData.release_date}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
