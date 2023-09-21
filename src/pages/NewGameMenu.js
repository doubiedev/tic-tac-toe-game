import React from 'react';
import { useNewGameMenuUpdate } from '../contexts/NewGameMenuContext';
import PlayerPicker from '../components/PlayerPicker';
import logo from '../assets/logo.svg';

const NewGameMenu = () => {
	const { handleNewGameClick } = useNewGameMenuUpdate();

	return (
		<main>
			<div className='new-game-container'>
				<object data={logo} type='image/svg+xml'>
					Logo
				</object>
				<PlayerPicker />
				<button
					className='btn-yellow max-width'
					onClick={() => handleNewGameClick('cpu')}
				>
					NEW GAME (VS CPU)
				</button>
				<br />
				<button
					className='btn-blue max-width'
					onClick={() => handleNewGameClick('player')}
				>
					NEW GAME (VS PLAYER)
				</button>
			</div>
		</main>
	);
};

export default NewGameMenu;
