import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../style/main-pages.css';

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

			setMovieInfo(results.filter((images) => images.poster_path !== null));
		};
		fetchMovie();
	}, []);

	return (
		<div className='movie-content'>
			<h1>{title}</h1>
			<div className='movies'>
				{movieInfo.map((movie) => (
					<Link key={movie.id} to={`/details/${movie.id}`}>
						<img src={`${images}${movie.poster_path}`} alt='movieImage' />
					</Link>
				))}
			</div>
		</div>
	);
}
