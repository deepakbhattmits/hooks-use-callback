/** @format */

import React from 'react';
import Parent from './Parent';
const App = () => {
	console.log('props :');
	return (
		<div className='ui container grid'>
			<Parent />
		</div>
	);
};
export default App;
