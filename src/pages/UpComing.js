import React from 'react';
import ReusableApiReqPage from './ReusableApiReqPage';

const url = 'https://api.themoviedb.org/3/discover/movie';

export default function UpComing() {
	return (
		<div>
			<ReusableApiReqPage title='UP COMING' url={url} />
		</div>
	);
}
