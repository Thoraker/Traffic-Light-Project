import { useState } from 'react';
import React from 'react';
import './App.css';

const color = {
	red: 'backgroundColor: red',
	yellow: 'backgroundColor: yellow',
	green: 'backgroundColor: green',
};

const App = () => {
	const [light, setLight] = useState('red');

	return (
		<div>
			<div className='box'>
				<div
					onClick={() => setLight('red')}
					className={light === 'red' ? 'red' : 'grey'}
				></div>
				<div
					onClick={() => setLight('yellow')}
					className={light === 'yellow' ? 'yellow' : 'grey'}
				></div>
				<div
					onClick={() => setLight('green')}
					className={light === 'green' ? 'green' : 'grey'}
				></div>
			</div>
			<div className='post'></div>
		</div>
	);
};

export default App;
