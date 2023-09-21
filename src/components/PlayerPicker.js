import React from 'react';
import {
	useNewGameMenu,
	useNewGameMenuUpdate,
} from '../contexts/NewGameMenuContext';
import iconX from '../assets/icon-x.svg';
import iconO from '../assets/icon-o.svg';

const PlayerPicker = () => {
	const { isPlayerOneX } = useNewGameMenu();
	const { setIsPlayerOneX } = useNewGameMenuUpdate();

	return (
		<div className='player-picker max-width'>
			<h4 className='heading-XS'>PICK PLAYER 1's MARK</h4>
			<div
				className='player-picker-btn'
				onClick={() => setIsPlayerOneX(!isPlayerOneX)}
			>
				<div className='player-picker-x'>
					<object data={iconX} type='image/svg+xml'>
						Icon X
					</object>
				</div>
				<div className='player-picker-o'>
					<object data={iconO} type='image/svg+xml'>
						Icon O
					</object>
				</div>
			</div>
			<p>Player 1's Selected Mark: {isPlayerOneX ? 'X' : 'O'}</p>
			<p>REMEMBER : X GOES FIRST</p>
		</div>
	);
};

export default PlayerPicker;
