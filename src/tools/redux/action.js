import Axios from 'axios';
export function inputAction(inputMovie) {
	return {
		type: 'SEARCH_MOVIE',
		payload: inputMovie,
	};
}
// API KEY
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

// URLs
const topRatedUrl = process.env.REACT_APP_TOP_RATED_URL;
const popularUrl = process.env.REACT_APP_POPULAR_URL;
const nowPlayingUrl = process.env.REACT_APP_NOW_PLAYING_URL;

// Fetch movies
export const fetchMovies = () => async (dispatch, getState) => {
	dispatch({ type: 'FETCH_MOVIES_REQUEST' });
	try {
		const topRated = await Axios.get(topRatedUrl, {
			params: { api_key: API_KEY },
		});
		const popular = await Axios.get(popularUrl, {
			params: { api_key: API_KEY },
		});
		const nowPlaying = await Axios.get(nowPlayingUrl, {
			params: { api_key: API_KEY },
		});

		dispatch({
			type: 'FETCH_MOVIES_SUCCESS',
			payload: {
				top_rated: topRated.data.results,
				popular_now: popular.data.results,
				playing_now: nowPlaying.data.results,
			},
		});
	} catch (error) {
		dispatch({
			type: 'ETCH_MOVIES_FAILURE',
			error,
		});
	}
};
