import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

function YoutubeVideo(props) {
	function VideoOnReady(event) {
		// access to player in all event handlers via event.target
		useEffect(() => {
			event.target.paushVideo();
		}, []);
	}

	const opts = {
		positoin: 'absolute',
		top: '10%',
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			// autoplay: 1,
		},
	};
	const videoId = props.videoId;

	return (
		<YouTube videoId={videoId} opts={opts} onReady={(event) => VideoOnReady} />
	);
}

export default YoutubeVideo;
