const initialState = {
	search: '',
	movies: [],
	loading: false,
	error: null,
};

export function movieReducer(state = initialState, action) {
	switch (action.type) {
		case 'SEARCH_MOVIE':
			return {
				...state,
				search: action.payload,
			};
		case 'FETCH_MOVIES_REQUEST':
			return {
				...state,
				loading: true,
				error: null,
			};
		case 'FETCH_MOVIES_SUCCESS':
			return {
				...state,
				loading: false,
				movies: action.payload,
			};

		case 'FETCH_MOVIES_FAILURE':
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}
