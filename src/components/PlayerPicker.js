import React from 'react';
import {
	useNewGameMenu,
	useNewGameMenuUpdate,
} from '../contexts/NewGameMenuContext';
import { ReactComponent as IconX } from '../assets/icon-x.svg';
import { ReactComponent as IconO } from '../assets/icon-o.svg';

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
				<div
					className='player-picker-x'
					id={isPlayerOneX ? 'mark-selected' : 'mark-not-selected'}
				>
					<IconX
						style={{ width: '32px', height: '32px' }}
						className={isPlayerOneX ? 'mark-selected' : 'mark-not-selected'}
					/>
				</div>
				<div
					className='player-picker-o'
					id={isPlayerOneX ? 'mark-not-selected' : 'mark-selected'}
				>
					<IconO
						style={{ width: '32px', height: '32px' }}
						className={isPlayerOneX ? 'mark-not-selected' : 'mark-selected'}
					/>
				</div>
			</div>
			<p className='body'>REMEMBER : X GOES FIRST</p>
		</div>
	);
};

export default PlayerPicker;
