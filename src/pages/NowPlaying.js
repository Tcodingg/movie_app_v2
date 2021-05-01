import React from 'react';
import ReusableApiReqPage from './ReusableApiReqPage';

const url = 'https://api.themoviedb.org/3/movie/now_playing';

export default function NowPlaying() {
	return (
		<div>
			<ReusableApiReqPage title='NOW PLAYING' url={url} />
		</div>
	);
}
