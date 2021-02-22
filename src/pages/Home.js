import React from 'react';
import './main-pages.css';
import Main from './Main';
import tv from '../images/tv.png';

export default function Home() {
	return (
		<div>
			<Main />
			<div className='home-banner'>
				<div className='home-description'>
					<h1>Enjoy Your TV.</h1>
					<p>
						Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more.
					</p>
				</div>
				<div className='img-container'>
					<img src={tv} alt='tv' />
				</div>
			</div>
		</div>
	);
}
