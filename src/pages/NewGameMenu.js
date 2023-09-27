import React from 'react';
import PlayerPicker from '../components/PlayerPicker';
import NewGameButtons from '../components/NewGameButtons';
import { ReactComponent as Logo } from '../assets/logo.svg';

const NewGameMenu = () => {
	return (
		<main className='flex'>
			<div className='game-container flex flex-column'>
				<Logo />
				<PlayerPicker />
				<NewGameButtons />
			</div>
		</main>
	);
};

export default NewGameMenu;
