import React from 'react';
import './main-pages.css';
import Main from './Main';
import tv from '../images/tv.png';

import { MoviesData } from './MoviesData';
import ReusableApiReqPage from './ReusableApiReqPage';

export default function Home() {
	console.log(MoviesData);
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
			{MoviesData.map((movie, index) => {
				return (
					<div key={index}>
						<ReusableApiReqPage url={movie.url} title={movie.title} />
					</div>
				);
			})}
		</div>
	);
}