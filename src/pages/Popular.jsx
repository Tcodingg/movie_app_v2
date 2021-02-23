import React from 'react';
import ReusableApiReqPage from './ReusableApiReqPage';
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

export default function Popular() {
	const url = 'https://api.themoviedb.org/3/movie/popular';

	return (
		<div>
			<ReusableApiReqPage title='POPULAR' url={url} />
		</div>
	);
}
