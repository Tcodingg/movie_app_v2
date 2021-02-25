export function inputReducer(state = '', action) {
	switch (action.type) {
		case 'MOVIE_NAME':
			// console.log(state);
			return action.payload;

		default:
			return state;
	}
}
