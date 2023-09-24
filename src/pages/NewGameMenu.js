import React from 'react';
import PlayerPicker from '../components/PlayerPicker';
import NewGameButtons from '../components/NewGameButtons';
import { ReactComponent as Logo } from '../assets/logo.svg';

const NewGameMenu = () => {
	return (
		<main>
			<div className='game-container'>
				<Logo />
				<PlayerPicker />
				<NewGameButtons />
			</div>
		</main>
	);
};

export default NewGameMenu;
