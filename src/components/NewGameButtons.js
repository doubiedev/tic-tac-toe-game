import React from 'react';
import { useNewGameMenuUpdate } from '../contexts/NewGameMenuContext';

const NewGameButtons = () => {
	const { handleNewGameClick } = useNewGameMenuUpdate();
	return (
		<>
			<button
				className='btn-new-game w-max flex bg-yellow bg-yellow-hover bs-yellow-L pb-L text-dark br-L pointer'
				onClick={() => handleNewGameClick('cpu')}
			>
				<h3>NEW GAME (VS CPU)</h3>
			</button>
			<br />
			<button
				className='btn-new-game w-max flex bg-blue bg-blue-hover bs-blue-L pb-L text-dark br-L pointer'
				onClick={() => handleNewGameClick('player')}
			>
				<h3>NEW GAME (VS PLAYER)</h3>
			</button>
		</>
	);
};

export default NewGameButtons;
