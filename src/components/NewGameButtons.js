import React from 'react';
import { useNewGameMenuUpdate } from '../contexts/NewGameMenuContext';

const NewGameButtons = () => {
	const { handleNewGameClick } = useNewGameMenuUpdate();
	return (
		<>
			<button
				className='btn-yellow btn-new-game max-width flex'
				onClick={() => handleNewGameClick('cpu')}
			>
				<h3 className='heading-S'>NEW GAME (VS CPU)</h3>
			</button>
			<br />
			<button
				className='btn-blue btn-new-game max-width flex'
				onClick={() => handleNewGameClick('player')}
			>
				<h3 className='heading-S'>NEW GAME (VS PLAYER)</h3>
			</button>
		</>
	);
};

export default NewGameButtons;
