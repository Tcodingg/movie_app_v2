import Axios from 'axios';
export function inputAction(inputMovie) {
	return {
		type: 'SEARCH_MOVIE',
		payload: inputMovie,
	};
}

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated';
const popularUrl = 'https://api.themoviedb.org/3/movie/popular';
const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing';
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
