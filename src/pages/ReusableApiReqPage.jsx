import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './main-pages.css';

export default function ReusableApiReqPage(props) {
	const url = props.url;
	const title = props.title;
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
	const images = 'https://image.tmdb.org/t/p/w500';
	const [movieInfo, setMovieInfo] = useState([]);

	useEffect(() => {
		const fetchMovie = async () => {
			const {
				data: { results },
			} = await axios.get(url, { params: { api_key: API_KEY } });

			setMovieInfo(results);
		};
		fetchMovie();
	}, []);

	return (
		<div className='movie-content'>
			<h1>{title}</h1>
			<div className='movies'>
				{movieInfo.map((movie) => (
					<img src={`${images}${movie.poster_path}`} alt='movieImage' />
				))}
			</div>
		</div>
	);
}
