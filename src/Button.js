/** @format */

import React from 'react';

const Button = props => {
	const { handleClick } = props;
	console.log('Button Component rendered:');
	return (
		<>
			<button className='btn btn-default' onClick={handleClick}>
				{props.children}
			</button>
		</>
	);
};

export default React.memo(Button);
