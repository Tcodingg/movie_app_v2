import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../style/main-pages.css';
import { fetchMovies } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

export default function ReusableApiReqPage(props) {
	const url = props.url;
	const title = props.title;
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
	const images = 'https://image.tmdb.org/t/p/w500';
	const [movieInfo, setMovieInfo] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchMovie = async () => {
			// dispatch(fetchMovies());
			const {
				data: { results },
			} = await axios.get(url, { params: { api_key: API_KEY } });
			// console.log(results);
			setMovieInfo(results.filter((images) => images.poster_path !== null));
		};
		fetchMovie();
	}, [dispatch, url, API_KEY]);

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
