import React, { useState } from 'react';
import './main-pages.css';
import { useHistory } from 'react-router-dom';
// import { movieName } from './redux/action';

export default function Main() {
	function handleKeydown(e) {
		console.log('keydown');
	}
	function handleInput(e) {
		console.log(e.target.value);
	}

	return (
		<div className='main'>
			<input
				placeholder='Search...'
				onKeyDown={handleKeydown}
				onChange={handleInput}
			/>
		</div>
	);
}
