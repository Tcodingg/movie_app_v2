import React, { useState } from 'react';
import './main-pages.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { inputAction } from '../tools/redux/action';
// import { movieName } from './redux/action';

export default function Main(props) {
	const [input, setInput] = useState('');
	const [movieName, setMovieName] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();

	function handleKeydown(e) {
		if (e.key === 'Enter' && input.length > 0) {
			setMovieName(input);
			dispatch(inputAction(input));
			history.push(`/movie_app_v2/search/query=${input}`);
			setInput('');
		}
	}
	let location = useLocation();

	function handleInput(e) {
		const inputVal = e.target.value;

		setInput(e.target.value);
	}

	return (
		<div className='main'>
			<input
				placeholder='Search...'
				onKeyDown={handleKeydown}
				onChange={handleInput}
				value={input}
			/>
		</div>
	);
}
