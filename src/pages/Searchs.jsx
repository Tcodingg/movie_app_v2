import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
// import '../pages/sub-pages.css';
import { useSelector } from 'react-redux';
import '../pages/sub-pages.css';
import ReactStars from 'react-stars';
import queryString from 'query-string';

export default function Searchs(props) {
	const url = 'https://api.themoviedb.org/3/search/movie?';
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

	const [movieData, setMovieData] = useState([]);
	const images = 'https://image.tmdb.org/t/p/w500';
	const movieName = useSelector((state) => state.inputReducer);
	let history = useHistory();
	let location = useLocation();
	let { query } = useParams();

	// const { page } = queryString.parse(location.hash);

	useEffect(() => {
		if (!query) {
			return;
		}
		try {
			async function fetchData() {
				const {
					data: { results },
				} = await axios.get(url, {
					params: {
						api_key: API_KEY,
						query: query,
					},
				});
				setMovieData(results.filter((images) => images.poster_path !== null));
			}

			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, [movieName, query, location, history]);
	console.log(query);

	return (
		<div className='search'>
			{movieData.map((movie) => {
				return (
					<div className='search-info' key={movie.id}>
						<Link to={`/details/${movie.id}`}>
							<img src={`${images}${movie.poster_path}`} alt='' />
						</Link>
						<h3>{movie.title} </h3>
						<ReactStars
							count={5}
							size={24}
							color2={'#ffd700'}
							value={Number((movie.vote_average / 2).toFixed(1))}
							edit={false}
						/>
					</div>
				);
			})}
		</div>
	);
}
