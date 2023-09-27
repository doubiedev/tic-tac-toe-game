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
		<div className='player-picker flex flex-column bg-dark-highlight bs-dark-L max-width br-L'>
			<h4 className='text-light'>PICK PLAYER 1'S MARK</h4>

			<div className='player-picker-btn-wrapper bg-dark br-L flex'>
				<div
					className='player-picker-x br-L flex'
					id={isPlayerOneX ? 'mark-selected' : 'mark-not-selected'}
					onClick={() => setIsPlayerOneX(true)}
				>
					<IconX
						style={{ width: '32px', height: '32px' }}
						className={isPlayerOneX ? 'mark-selected' : 'mark-not-selected'}
					/>
				</div>

				<div
					className='player-picker-o br-L flex'
					id={isPlayerOneX ? 'mark-not-selected' : 'mark-selected'}
					onClick={() => setIsPlayerOneX(false)}
				>
					<IconO
						style={{ width: '32px', height: '32px' }}
						className={isPlayerOneX ? 'mark-not-selected' : 'mark-selected'}
					/>
				</div>
			</div>

			<p className='text-light'>REMEMBER : X GOES FIRST</p>
		</div>
	);
};

export default PlayerPicker;
