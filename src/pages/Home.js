import React from 'react';
import './main-pages.css';
import Main from './Main';
import tv from '../images/tv.png';
import Popular from './Popular';
import TopRated from './TopRated';
import NowPlaying from './NowPlaying';


export default function Home() {
	return (
		<div>
			<div className='home-banner'>
				<div className='home-description'>
					<h1>Enjoy Your TV.</h1>
					<p>
						Watch on Smart TVs, Playstation, Xbox,
						<span> Chromecast, Apple TV, Blu-ray players, and more.</span>
					</p>
				</div>
				<div className='img-container'>
					<img src={tv} alt='tv' />
				</div>
			</div>
			<NowPlaying />
			<TopRated />
			<Popular />
		</div>
	);
}
