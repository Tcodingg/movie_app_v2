import React from 'react';
import ReusableApiReqPage from './ReusableApiReqPage';

export default function TopRated() {
	const url = 'https://api.themoviedb.org/3/movie/top_rated';

	return (
		<div>
			<ReusableApiReqPage title='TOP RATED' url={url} />
		</div>
	);
}
