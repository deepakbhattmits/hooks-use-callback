/** @format */

import React from 'react';

const Modal = props => {
	const { open, close, onKeyUp } = props;
	// console.log('TEST keyup function:', open, close, onKeyUp);
	return (
		<div
			className={`ui dimmer modals page transition ${
				open ? 'animating fade in visible active' : 'hidden'
			}`}
			onClick={close}
			onKeyPress={onKeyUp}>
			<div
				className={`ui standard test modal scrolling transition ${
					open ? 'animating scale in visible active' : 'hidden'
				}`}
				onClick={e => e.stopPropagation()}>
				<i className='close icon' onClick={close}></i>
				<div className='header'>Profile Picture</div>
				<div className='image content'>
					<div className='ui medium image'>
						<img src='/images/avatar/large/chris.jpg' alt='pro-pic' />
					</div>
					<div className='description'>
						<div className='ui header'>
							We've auto-chosen a profile image for you.
						</div>
						<p>
							We've grabbed the following image from the image associated with
							your registered e-mail address.
						</p>
						<p>Is it okay to use this photo?</p>
					</div>
				</div>
				<div className='actions'>
					<div className='ui black deny button'>Nope</div>
					<div className='ui positive right labeled icon button'>
						Yep, that's me
						<i className='checkmark icon'></i>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Modal;
