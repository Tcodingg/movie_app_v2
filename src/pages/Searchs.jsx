import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/sub-pages.css';
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
		<div>
			{movieData.map((movie) => {
				return (
					<div key={movie.id} className='details'>
						<h3>{movie.title} </h3>
						<img src={`${images}${movie.poster_path}`} alt='' />
						<div className='rating-year'>
							<h5>Rating: {movie.vote_average}</h5>
							<h5>Year: {movie.release_date}</h5>
						</div>

						<p>{movie.overview} </p>
					</div>
				);
			})}
			{/* <h3>{movieData.title} </h3>
			<img src={`${images}${movieData.poster_path}`} alt='' />
			<div className='rating-year'>
				<h5>Rating: {movieData.vote_average}</h5>
				<h5>Year: {movieData.release_date}</h5>
			</div>

			<p>{movieData.overview} </p> */}
		</div>
	);
}
