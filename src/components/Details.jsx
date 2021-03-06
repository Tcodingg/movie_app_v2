import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/sub-pages.css';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import ResponsiveVideoPlayer from '../tools/reusable/ResponsiveVideoPlayer';

export default function Details({ match }) {
	const [movieData, setMovieData] = useState([]);
	const [movieGenres, setMovieGeneres] = useState([]);

	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
	const url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}`;
	const recommendURL = `https://api.themoviedb.org/3/movie/${match.params.id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;

	const trailerUrl = `http://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=${API_KEY}`;

	const images = 'https://image.tmdb.org/t/p/w500';

	const [rating, setRating] = useState(0);
	const [recommended, setRecommened] = useState([]);
	const [trailer, setTrailer] = useState('');
	const youtubeLink = 'https://www.youtube.com/watch?v=';

	useEffect(() => {
		async function fetchMovie() {
			const { data } = await axios.get(url);

			setMovieData(data);
			setMovieGeneres(data.genres.map((i) => i));
			setRating(() => Number((data.vote_average / 2).toFixed(1)));
		}
		fetchMovie();
	}, [url]);

	useEffect(() => {
		const getRecommended = async () => {
			const { data } = await axios.get(recommendURL, {
				params: {
					movie_id: match.params.id,
					api_key: API_KEY,
				},
			});
			setRecommened(data.results);
			console.log(data);
		};
		getRecommended();
	}, []);

	useEffect(() => {
		const getVideo = async () => {
			const {
				data: { results },
			} = await axios.get(trailerUrl);
			setTrailer(youtubeLink + results[0].key);

			// console.log(results[0].key);
		};
		getVideo();
	}, [trailer]);

	return (
		<div>
			<div className='details'>
				<div
					className='trailer'
					style={{
						margin: '0',
						width: '100%',
						height: '100%',
						display: 'flex',
					}}
				>
					<div className='' style={{ width: '100%', height: 'auto' }}>
						<ResponsiveVideoPlayer url={trailer} />
					</div>
				</div>

				<div className='movie-description'>
					<h3>{movieData.title} </h3>
					<p>{movieData.overview} </p>
					<div className='genres-container'>
						<div>
							<p>Genre:</p>
						</div>

						<div className='genres'>
							{movieGenres.map((movie, index) => {
								return (
									<p className='genres-title' key={index}>
										{movie.name}
									</p>
								);
							})}
						</div>
					</div>
					<div className='rating-year'>
						<div className='rating'>
							<span>
								<ReactStars
									count={5}
									size={24}
									color2={'#ffd700'}
									value={rating}
									edit={false}
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='recommended'>
				<h1 style={{ margin: '60px 10% 0 10%' }}>Recommended</h1>
				<div className='search'>
					{recommended.map((movie) => {
						return (
							<div
								onClick={() => window.location.reload()}
								// onClick={() => props.history.goBack()}
								className='search-info'
								key={movie.id}
							>
								<Link to={`/details/${movie.id}`}>
									<img src={`${images}${movie.poster_path}`} alt='loading...' />
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
			</div>
		</div>
	);
}
