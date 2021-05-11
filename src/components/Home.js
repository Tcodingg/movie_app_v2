import React from 'react';
import tv from '../images/tv.png';
import '../style/main-pages.css';

import MoviesByCategories from '../tools/reusable/moviesByCategories';

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
			<div>
				<MoviesByCategories />
			</div>
		</div>
	);
}
